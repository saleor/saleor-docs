// SEP-2640 on top of Blume's MCP handler: skills methods and skill:// reads are
// answered here; initialize and resources/list are Blume's, amended; the rest pass through.

export const SKILLS_EXTENSION = 'io.modelcontextprotocol/skills';
const SCHEME = 'skill://';
// Blume reads at most 64 KB; anything larger goes straight to it to be refused.
const BODY_LIMIT_BYTES = 65_536;
const CORS_HEADERS = {
  'Access-Control-Allow-Headers': 'Content-Type, Mcp-Session-Id, Mcp-Protocol-Version',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Expose-Headers': 'Mcp-Session-Id',
};

const skillUri = (skill, file = 'SKILL.md') => `${SCHEME}${skill.name}/${file}`;

const entryFor = skill => ({
  uri: skillUri(skill),
  frontmatter: skill.frontmatter,
  resources: skill.files.map(file => ({ uri: skillUri(skill, file.path), digest: file.digest, size: file.size })),
});

const reply = (id, payload) => Response.json({ jsonrpc: '2.0', id, ...payload }, { headers: CORS_HEADERS });

const error = (id, code, message) => reply(id, { error: { code, message } });

function readSkillFile(id, uri, list) {
  const skill = list.find(candidate => uri.startsWith(`${SCHEME}${candidate.name}/`));
  const file = skill?.files.find(candidate => skillUri(skill, candidate.path) === uri);
  if (!file) return error(id, -32_002, `No skill file found at "${uri}". Use skills/list to find valid URIs.`);
  const content = file.blob === undefined ? { text: file.text } : { blob: file.blob };
  return reply(id, { result: { contents: [{ uri, mimeType: file.mimeType, ...content }] } });
}

// Forward to Blume, then edit its JSON result. Stateless JSON responses only, as Blume serves.
async function amend(response, edit) {
  if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) return response;
  const body = await response.json();
  if (body.result) edit(body.result);
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response(JSON.stringify(body), { status: response.status, headers });
}

// The body as text, or undefined past the limit: Blume answers that with 413 itself.
async function readCapped(request) {
  const chunks = [];
  let total = 0;
  const reader = request.clone().body?.getReader();
  for (let chunk = await reader?.read(); chunk && !chunk.done; chunk = await reader.read()) {
    total += chunk.value.byteLength;
    if (total > BODY_LIMIT_BYTES) {
      // Not awaited: a tee branch's cancel settles only once Blume's branch is done too.
      reader.cancel().catch(() => {});
      return undefined;
    }
    chunks.push(chunk.value);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export function withSkills(handler, list) {
  if (list.length === 0) return handler;
  return async request => {
    if (request.method !== 'POST') return handler(request);
    let message;
    try {
      message = JSON.parse(await readCapped(request));
    } catch {
      return handler(request);
    }
    const { id, method, params } = message ?? {};
    if (method === 'skills/list') return reply(id, { result: { skills: list.map(entryFor) } });
    if (method === 'skills/get') {
      const skill = typeof params?.uri === 'string' ? list.find(candidate => skillUri(candidate) === params.uri) : undefined;
      return skill
        ? reply(id, { result: { skill: entryFor(skill) } })
        : error(id, -32_602, `No skill found at "${params?.uri}". Use skills/list to find valid skill URIs.`);
    }
    if (method === 'resources/read' && typeof params?.uri === 'string' && params.uri.startsWith(SCHEME)) {
      return readSkillFile(id, params.uri, list);
    }
    if (method === 'initialize') {
      return amend(await handler(request), result => {
        result.capabilities = { ...result.capabilities, extensions: { ...result.capabilities?.extensions, [SKILLS_EXTENSION]: {} } };
      });
    }
    if (method === 'resources/list') {
      return amend(await handler(request), result => {
        result.resources = [...result.resources ?? [], ...list.map(skill => ({
          uri: skillUri(skill),
          name: skill.name,
          title: skill.name,
          description: skill.frontmatter.description,
          mimeType: 'text/markdown',
        }))];
      });
    }
    return handler(request);
  };
}

