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

const legacyRoutes = new Set([
  '/developer/app-store/legacy-plugins/adyen',
  '/developer/extending/plugins/overview',
  '/developer/extending/plugins/payment-gateways',
]);

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
      : tokens(`${document.description} ${document.content}`);
    const words = new Set([
      ...record.titleWords,
      ...record.headingWords,
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
  const apiEntity = document.route.startsWith('/api-reference/')
    ? document.title.match(API_ENTITY_TITLE)
    : null;

  return {
    document,
    heading,
    position,
    titleWords,
    headingWords,
    titleTokens: new Set(titleWords),
    headingTokens: new Set(headingWords),
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
    apiName: normalizedWords(text).join(' '),
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
      exactApiMatch: Number(matchesApiName(record, query.apiName)),
      pagePriority: pageRank(record.document.route),
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

function matchesApiName(record, queryName) {
  return (
    !record.heading &&
    record.apiName !== null &&
    (queryName === record.apiName || queryName === record.apiTitle)
  );
}

function matchedFieldPriority(record, titleMatch, headingMatch) {
  if (titleMatch) return record.heading ? 2 : 3;
  if (headingMatch) return 2;
  return 1;
}

function compareRankedMatches(left, right) {
  const leftRank = left.rank;
  const rightRank = right.rank;

  return (
    rightRank.exactApiMatch - leftRank.exactApiMatch ||
    rightRank.pagePriority - leftRank.pagePriority ||
    rightRank.fieldPriority - leftRank.fieldPriority ||
    leftRank.typoCount - rightRank.typoCount ||
    rightRank.exactWordCount - leftRank.exactWordCount ||
    rightRank.phraseMatch - leftRank.phraseMatch ||
    leftRank.headingDepth - rightRank.headingDepth ||
    leftRank.fieldWordCount - rightRank.fieldWordCount ||
    compareRecordOrder(left.record, right.record)
  );
}

function compareRecordOrder(left, right) {
  if (left.document.route === right.document.route)
    return left.position - right.position;
  return (
    left.document.title.localeCompare(right.document.title) ||
    left.document.route.localeCompare(right.document.route)
  );
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

export function pageRank(route) {
  if (legacyRoutes.has(route)) return 1;
  if (!route.startsWith('/api-reference/')) return 40;
  if (route.includes('/mutations/')) return 30;
  if (route.includes('/queries/')) return 20;
  return 10;
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
