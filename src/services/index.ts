import env from '../config';
import axios from 'axios';

interface Repository {
  id: number;
  created_at: string;
  description: string | null;
  full_name: string;
  homepage: string | null;
  html_url: string;
  language: string | null;
  node_id: string;
  name: string;
  private: boolean;
  pushed_at: string;
  updated_at: string;
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
      id: repository.id,
      node_id: repository.node_id,
      name: repository.name,
      full_name: repository.full_name,
      private: repository.private,
      html_url: repository.html_url,
      description: repository.description,
      homepage: repository.homepage,
      language: repository.language,
      created_at: repository.created_at,
      updated_at: repository.updated_at,
      pushed_at: repository.pushed_at,
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
