import { createMcpFetchHandler as createBlumeHandler } from 'blume/ai/mcp/server.ts';
import skills from 'virtual:saleor-mcp-skills';
import { withSkills } from './mcp-skills-protocol.mjs';

// The generated /mcp endpoint imports this instead of Blume's server module (see mcp-skills.mjs).
export const createMcpFetchHandler = data => withSkills(createBlumeHandler(data), skills);
