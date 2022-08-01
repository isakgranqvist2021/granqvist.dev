import env from '../config';
import axios from 'axios';

interface Repository {
  description: string | null;
  homepage: string | null;
  html_url: string;
  language: string | null;
  name: string;
  pushed_at: string;
}

const include = [
  'BehanceDesignUI',
  'isakgranqvist.com',
  'MultiplayerChess',
  'MarinaMedia',
  'VPNFinder',
  'DropStore',
];

const headers = {
  Accept: 'application/vnd.github+json',
  Authorization: `token ${env.github_access_token}`,
};

const getRepositoryData = async (
  repository: any
): Promise<Repository | null> => {
  try {
    return {
      name: repository.name,
      html_url: repository.html_url,
      description: repository.description,
      homepage: repository.homepage,
      language: repository.language.toLowerCase(),
      pushed_at: new Date(repository.pushed_at).toLocaleDateString(),
    };
  } catch {
    return null;
  }
};

export const getRepositories = async (): Promise<Repository[] | null> => {
  try {
    const res = await axios.get(`https://api.github.com/user/repos`, {
      headers,
    });

    const data = res.data.filter((repository: any) =>
      include.includes(repository.name)
    );

    const repositories: (Repository | null)[] = await Promise.all(
      data.map(getRepositoryData)
    );

    return repositories.filter((repository) => repository) as Repository[];
  } catch {
    return null;
  }
};
