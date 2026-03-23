import { Octokit } from 'octokit';

const OWNER = process.env.GITHUB_OWNER || 'therealpan';
const REPO = process.env.GITHUB_REPO || 'pallanca-info-blog';
const BRANCH = process.env.GITHUB_BRANCH || 'main';

function getOctokit() {
  return new Octokit({ auth: process.env.GITHUB_PAT });
}

export async function getFileFromGitHub(path: string) {
  const octokit = getOctokit();
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path,
      ref: BRANCH,
    });
    if ('content' in data && 'sha' in data) {
      const content = Buffer.from(data.content, 'base64').toString('utf-8');
      return { content, sha: data.sha };
    }
    throw new Error('Not a file');
  } catch {
    return null;
  }
}

export async function commitFileToGitHub(
  path: string,
  content: string,
  message: string,
  sha?: string
) {
  const octokit = getOctokit();
  const { data } = await octokit.rest.repos.createOrUpdateFileContents({
    owner: OWNER,
    repo: REPO,
    path,
    message,
    content: Buffer.from(content).toString('base64'),
    branch: BRANCH,
    ...(sha ? { sha } : {}),
  });
  return data;
}
