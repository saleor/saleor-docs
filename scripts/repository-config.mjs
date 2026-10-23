// Explicit overrides take precedence over the deployment/CI repository.
export function repositoryConfig(env = process.env) {
  const [ciOwner, ciRepo] = (env.GITHUB_REPOSITORY ?? '').split('/');
  return {
    owner: env.DOCS_GITHUB_OWNER || env.VERCEL_GIT_REPO_OWNER || ciOwner || 'saleor',
    repo: env.DOCS_GITHUB_REPO || env.VERCEL_GIT_REPO_SLUG || ciRepo || 'saleor-docs',
    branch: env.DOCS_GITHUB_BRANCH || env.VERCEL_GIT_COMMIT_REF || env.GITHUB_HEAD_REF || env.GITHUB_REF_NAME || 'main',
  };
}

export function repositoryUrl(env = process.env) {
  const { owner, repo } = repositoryConfig(env);
  return `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;
}
