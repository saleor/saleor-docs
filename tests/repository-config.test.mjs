import test from 'node:test';
import assert from 'node:assert/strict';
import { repositoryConfig, repositoryUrl } from '../scripts/repository-config.mjs';

test('local repository links default to the documentation repository on main', () => {
  assert.deepEqual(repositoryConfig({}), { owner: 'saleor', repo: 'saleor-docs', branch: 'main' });
  assert.equal(repositoryUrl({}), 'https://github.com/saleor/saleor-docs');
});

test('Vercel previews link to their repository and branch', () => {
  assert.deepEqual(repositoryConfig({
    VERCEL_GIT_REPO_OWNER: 'saleor', VERCEL_GIT_REPO_SLUG: 'saleor-docs',
    VERCEL_GIT_COMMIT_REF: 'preview/changes', GITHUB_REPOSITORY: 'other/repo',
  }), { owner: 'saleor', repo: 'saleor-docs', branch: 'preview/changes' });
});

test('GitHub pull request builds use the source branch', () => {
  assert.deepEqual(repositoryConfig({
    GITHUB_REPOSITORY: 'saleor/new-docs', GITHUB_HEAD_REF: 'fix-links', GITHUB_REF_NAME: '12/merge',
  }), { owner: 'saleor', repo: 'new-docs', branch: 'fix-links' });
});

test('explicit repository overrides take precedence', () => {
  assert.deepEqual(repositoryConfig({
    DOCS_GITHUB_OWNER: 'custom', DOCS_GITHUB_REPO: 'docs', DOCS_GITHUB_BRANCH: 'release',
    VERCEL_GIT_REPO_OWNER: 'saleor', VERCEL_GIT_REPO_SLUG: 'new-docs', VERCEL_GIT_COMMIT_REF: 'main',
  }), { owner: 'custom', repo: 'docs', branch: 'release' });
});
