// Read ranking rules from top to bottom: the first difference decides the order.
// Only ties advance to the next rule; the signals are never added together.
const RANKING_ORDER = [
  { signal: 'exactGuideTitle', prefer: 'higher' }, // A current guide named by the query.
  { signal: 'exactApiMatch', prefer: 'higher' },   // An API entity named by the query.
  { signal: 'pagePriority', prefer: 'higher' },    // Current docs > API > legacy plugins.
  { signal: 'appOverviewMatch', prefer: 'higher' }, // App landing page for a broad app query.
  { signal: 'fieldPriority', prefer: 'higher' },   // Page title > heading > body.
  { signal: 'typoCount', prefer: 'lower' },        // Fewer spelling corrections.
  { signal: 'exactWordCount', prefer: 'higher' },  // More exact words in the matched field.
  { signal: 'phraseMatch', prefer: 'higher' },     // Query words appear together, in order.
  { signal: 'headingDepth', prefer: 'lower' },     // Shallower headings.
  { signal: 'fieldWordCount', prefer: 'lower' },   // Shorter, more focused titles/headings.
];
// Remaining ties use document title, route, and heading order for stability.

// Only relative order matters; gaps between numbers do not add extra weight.
const PAGE_PRIORITY = {
  currentDocs: 40,
  apiMutation: 30,
  apiQuery: 20,
  apiType: 10,
  legacyPlugin: 1,
};
const FIELD_PRIORITY = { pageTitle: 3, heading: 2, body: 1 };

const RESULT_LIMIT = 12;
const TERM_CACHE_LIMIT = 256;
const SECTION_ORDER = ['Guides', 'API', 'Recipes', 'Releases'];
const API_ENTITY_TITLE =
  /^(.+)\s+(?:Query|Mutation|Subscription|Object|Input Type|Enum|Interface|Union|Scalar|Directive)$/;
const HTML_ENTITIES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function createEngine(documents, metadata = {}) {
  const index = createSearchIndex(documents, metadata);
  const matchTerm = createTermMatcher(index);

  return async (text, options = {}) => {
    const query = prepareQuery(text, matchTerm);
    if (!query.terms.length) return { hits: [], sections: [] };

    const matches = findMatchingRecords(index, query, options);
    const ranked = matches.map((match) => rankMatch(match, query));
    ranked.sort(compareRankedMatches);

    const seenRoutes = new Set();
    const visible = ranked
      .filter(
        ({ record }) =>
          !options.section || record.document.section === options.section,
      )
      .filter(({ record }) => {
        if (!options.uniquePages) return true;
        if (seenRoutes.has(record.document.route)) return false;
        seenRoutes.add(record.document.route);
        return true;
      })
      .slice(0, options.limit ?? RESULT_LIMIT);

    return {
      sections: countSections(ranked),
      hits: visible.map(({ record }) => toSearchHit(record)),
    };
  };
}

// Ranking: decide which of the matching records comes first.
function rankMatch({ record, termEdits }, query) {
  const titleMatch = query.wordMatches.every((words) =>
    fieldMatches(record.titleTokens, words),
  );
  const headingMatch =
    record.heading &&
    query.wordMatches.every(
      (words) =>
        fieldMatches(record.titleTokens, words) ||
        fieldMatches(record.headingTokens, words),
    );
  const fieldWords =
    headingMatch && !titleMatch ? record.headingWords : record.titleWords;

  return {
    record,
    rank: {
      exactGuideTitle: Number(matchesGuideTitle(record, query.normalizedText)),
      exactApiMatch: Number(matchesApiName(record, query.normalizedText)),
      pagePriority: pageRank(record.document.route),
      appOverviewMatch: Number(matchesAppOverview(record, query)),
      fieldPriority: matchedFieldPriority(record, titleMatch, headingMatch),
      typoCount: [...termEdits.values()].reduce(
        (total, edits) => total + edits,
        0,
      ),
      exactWordCount: query.terms.filter((term) => fieldWords.includes(term))
        .length,
      phraseMatch: Number(fieldWords.join(' ').includes(query.phrase)),
      headingDepth: record.heading?.depth ?? 1,
      fieldWordCount: fieldWords.length,
    },
  };
}

function fieldMatches(fieldTokens, wordMatches) {
  return [...wordMatches.keys()].some((word) => fieldTokens.has(word));
}

function matchesGuideTitle(record, queryText) {
  return (
    !record.heading &&
    record.document.section === 'Guides' &&
    !isLegacyRoute(record.document.route) &&
    queryText === record.normalizedTitle
  );
}

function matchesAppOverview(record, query) {
  // A topic such as 'configuration' must not receive the broad-query boost.
  // Every query word must match the app's title with 'Overview' removed.
  return (
    !record.heading &&
    record.overviewSubjectTokens !== null &&
    query.wordMatches.every((words) =>
      fieldMatches(record.overviewSubjectTokens, words),
    )
  );
}

function matchesApiName(record, queryName) {
  return (
    !record.heading &&
    record.apiName !== null &&
    (queryName === record.apiName || queryName === record.apiTitle)
  );
}

export function pageRank(route) {
  if (isLegacyRoute(route)) return PAGE_PRIORITY.legacyPlugin;
  if (!route.startsWith('/api-reference/')) return PAGE_PRIORITY.currentDocs;
  if (route.includes('/mutations/')) return PAGE_PRIORITY.apiMutation;
  if (route.includes('/queries/')) return PAGE_PRIORITY.apiQuery;
  return PAGE_PRIORITY.apiType;
}

function isLegacyRoute(route) {
  return [
    '/developer/app-store/legacy-plugins',
    '/developer/extending/plugins',
  ].some((prefix) => route === prefix || route.startsWith(`${prefix}/`));
}

function isAppOverview(route) {
  return /^\/developer\/app-store\/apps\/[^/]+\/overview$/.test(route);
}

function matchedFieldPriority(record, titleMatch, headingMatch) {
  if (titleMatch && !record.heading) return FIELD_PRIORITY.pageTitle;
  if (titleMatch || headingMatch) return FIELD_PRIORITY.heading;
  return FIELD_PRIORITY.body;
}

function compareRankedMatches(left, right) {
  for (const { signal, prefer } of RANKING_ORDER) {
    const difference = left.rank[signal] - right.rank[signal];
    if (difference !== 0) return prefer === 'higher' ? -difference : difference;
  }
  return compareRecordOrder(left.record, right.record);
}

function compareRecordOrder(left, right) {
  if (left.document.route === right.document.route)
    return left.position - right.position;
  return (
    left.document.title.localeCompare(right.document.title) ||
    left.document.route.localeCompare(right.document.route)
  );
}

// Matching: index words, expand query terms, and require every query term.
function createSearchIndex(documents, metadata) {
  const records = [];
  const recordIdsByWord = new Map();
  const wordsByLength = new Map();

  function addRecord(document, heading, position) {
    const record = createRecord(document, heading, position);
    const recordId = records.length;
    records.push(record);

    const bodyWords = heading
      ? []
      : indexedTokens(`${document.description} ${document.content}`);
    const words = new Set([
      ...record.titleTokens,
      ...record.headingTokens,
      ...bodyWords,
    ]);

    for (const word of words) {
      if (!recordIdsByWord.has(word)) {
        recordIdsByWord.set(word, []);
        if (!wordsByLength.has(word.length)) wordsByLength.set(word.length, []);
        wordsByLength.get(word.length).push(word);
      }
      recordIdsByWord.get(word).push(recordId);
    }
  }

  for (const source of documents) {
    const document = { ...source, section: searchScope(source.route) };
    addRecord(document, null, 0);

    const headings = metadata[document.route]?.headings ?? [];
    for (const [position, heading] of headings.entries()) {
      addRecord(document, heading, position + 1);
    }
  }

  return { records, recordIdsByWord, wordsByLength };
}

function createRecord(document, heading, position) {
  const titleWords = tokens(document.title);
  const headingWords = heading ? tokens(heading.text) : [];
  const appOverview = isAppOverview(document.route);
  const titleTokens = new Set(indexedTokens(document.title));
  const overviewSubjectTokens = appOverview
    ? new Set(indexedTokens(document.title.replace(/\s+Overview$/i, '')))
    : null;

  // The route establishes this is an app, even for titles like 'Segment Overview'.
  if (appOverview) {
    titleTokens.add('app');
    overviewSubjectTokens.add('app');
  }
  const apiEntity = document.route.startsWith('/api-reference/')
    ? document.title.match(API_ENTITY_TITLE)
    : null;

  return {
    document,
    heading,
    position,
    titleWords,
    headingWords,
    normalizedTitle: normalizedWords(document.title).join(' '),
    titleTokens,
    headingTokens: new Set(heading ? indexedTokens(heading.text) : []),
    overviewSubjectTokens,
    apiName: apiEntity ? normalizedWords(apiEntity[1]).join(' ') : null,
    apiTitle: apiEntity ? normalizedWords(document.title).join(' ') : null,
  };
}

function createTermMatcher(index) {
  const vocabulary = [...index.recordIdsByWord.keys()];
  const cache = new Map();

  return (term, { allowPrefix, exactOnly }) => {
    if (exactOnly) return exactTermMatch(term, index.recordIdsByWord);

    const cacheKey = `${term}:${allowPrefix}`;
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    const matches = exactTermMatch(term, index.recordIdsByWord);
    if (allowPrefix) {
      for (const word of vocabulary) {
        if (word.startsWith(term)) matches.set(word, 0);
      }
    }

    const maxEdits = allowedTypoCount(term);
    for (
      let length = term.length - maxEdits;
      maxEdits && length <= term.length + maxEdits;
      length++
    ) {
      for (const word of index.wordsByLength.get(length) ?? []) {
        if (matches.has(word)) continue;
        const edits = editDistance(term, word, maxEdits);
        if (edits <= maxEdits) matches.set(word, edits);
      }
    }

    if (cache.size > TERM_CACHE_LIMIT) cache.clear();
    cache.set(cacheKey, matches);
    return matches;
  };
}

function exactTermMatch(term, recordIdsByWord) {
  return new Map(recordIdsByWord.has(term) ? [[term, 0]] : []);
}

function allowedTypoCount(term) {
  if (/^\d+$/.test(term)) return 0;
  if (term.length >= 7) return 2;
  if (term.length >= 3) return 1;
  return 0;
}

function prepareQuery(text, matchTerm) {
  const terms = tokens(text);
  const exactOnly = /[\p{L}\p{N}]-[\p{L}\p{N}]/u.test(text);

  return {
    terms,
    phrase: terms.join(' '),
    normalizedText: normalizedWords(text).join(' '),
    wordMatches: terms.map((term, position) =>
      matchTerm(term, {
        allowPrefix: position === terms.length - 1,
        exactOnly,
      }),
    ),
  };
}

function findMatchingRecords(index, query, options) {
  const termEditsByRecord = new Map();

  for (const [termPosition, wordMatches] of query.wordMatches.entries()) {
    for (const [word, edits] of wordMatches) {
      for (const recordId of index.recordIdsByWord.get(word) ?? []) {
        if (!termEditsByRecord.has(recordId))
          termEditsByRecord.set(recordId, new Map());
        const termEdits = termEditsByRecord.get(recordId);
        const previousEdits = termEdits.get(termPosition) ?? Infinity;
        termEdits.set(termPosition, Math.min(previousEdits, edits));
      }
    }
  }

  const matches = [];
  for (const [recordId, termEdits] of termEditsByRecord) {
    const record = index.records[recordId];
    if (termEdits.size !== query.terms.length) continue;
    if (!matchesDocumentFilters(record.document, options)) continue;
    matches.push({ record, termEdits });
  }
  return matches;
}

function matchesDocumentFilters(document, options) {
  const matchesLocale = !options.locale || document.locale === options.locale;
  const matchesVersion =
    options.version === undefined ||
    (document.version ?? '') === options.version;
  const matchesType = !options.contentTypes?.length ||
    options.contentTypes.includes(document.contentType);
  const matchesFacets = Object.entries(options.facets ?? {}).every(
    ([key, value]) => document.facets?.[key] === value,
  );
  return matchesLocale && matchesVersion && matchesType && matchesFacets;
}

function countSections(ranked) {
  const counts = new Map();
  const countedRoutes = new Set();

  for (const { record } of ranked) {
    const { document } = record;
    if (countedRoutes.has(document.route)) continue;
    countedRoutes.add(document.route);
    counts.set(document.section, (counts.get(document.section) ?? 0) + 1);
  }

  return SECTION_ORDER.filter((section) => counts.has(section)).map(
    (label) => ({ label, count: counts.get(label) }),
  );
}

function toSearchHit({ document, heading }) {
  const title = heading
    ? `${document.title} — ${heading.text}`
    : document.title;
  const excerpt = document.description || document.content.slice(0, 160);

  return {
    url: document.route + (heading ? `#${heading.slug}` : ''),
    title: escapeHtml(title),
    excerpt: escapeHtml(excerpt),
    content: document.content,
    breadcrumb: document.breadcrumb ?? [],
    section: document.section ?? '',
    version: document.version,
  };
}

function searchScope(route) {
  if (route === '/api-reference' || route.startsWith('/api-reference/'))
    return 'API';
  if (route.startsWith('/recipes/')) return 'Recipes';
  if (route.startsWith('/changelog')) return 'Releases';
  return 'Guides';
}

export function escapeHtml(text) {
  return String(text).replace(
    /[&<>"']/g,
    (character) => HTML_ENTITIES[character],
  );
}

export function tokens(text) {
  return normalizedWords(text).map(singular);
}

// Index both the parts and the whole of compound names such as AvaTax.
// Queries still require every word; aliases do not introduce extra query terms.
function indexedTokens(text) {
  return [...new Set([...tokens(text), ...tokens(String(text).toLowerCase())])];
}

function normalizedWords(text) {
  return (
    String(text)
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
      .normalize('NFKD')
      .replace(/\p{M}/gu, '')
      .toLowerCase()
      .match(/[\p{L}\p{N}]+/gu) ?? []
  );
}

function singular(word) {
  if (word.length > 4 && word.endsWith('ies')) return word.slice(0, -3) + 'y';
  if (word.length > 3 && word.endsWith('s') && !/(ss|us|is)$/.test(word))
    return word.slice(0, -1);
  return word;
}

function editDistance(source, target, maxEdits) {
  if (Math.abs(source.length - target.length) > maxEdits) return maxEdits + 1;

  let previousRow = Array.from(
    { length: target.length + 1 },
    (_, position) => position,
  );
  let rowBeforePrevious;

  for (
    let sourcePosition = 1;
    sourcePosition <= source.length;
    sourcePosition++
  ) {
    const row = [sourcePosition];
    for (
      let targetPosition = 1;
      targetPosition <= target.length;
      targetPosition++
    ) {
      const insertion = row[targetPosition - 1] + 1;
      const deletion = previousRow[targetPosition] + 1;
      const substitution =
        previousRow[targetPosition - 1] +
        Number(source[sourcePosition - 1] !== target[targetPosition - 1]);
      row[targetPosition] = Math.min(insertion, deletion, substitution);

      const transposed =
        sourcePosition > 1 &&
        targetPosition > 1 &&
        source[sourcePosition - 1] === target[targetPosition - 2] &&
        source[sourcePosition - 2] === target[targetPosition - 1];
      if (transposed) {
        row[targetPosition] = Math.min(
          row[targetPosition],
          rowBeforePrevious[targetPosition - 2] + 1,
        );
      }
    }
    rowBeforePrevious = previousRow;
    previousRow = row;
  }

  return previousRow[target.length];
}
