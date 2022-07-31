import env from '../config';
import axios from 'axios';

interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
}

export const getRepositories = async (): Promise<Repository[] | null> => {
  try {
    const res = await axios.get(`https://api.github.com/user/repos`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `token ${env.github_access_token}`,
      },
    });

    return res.data.map((repository: any) => ({
      id: repository.id,
      node_id: repository.node_id,
      name: repository.name,
      full_name: repository.full_name,
      private: repository.private,
      html_url: repository.html_url,
      description: repository.description,
      homepage: repository.homepage,
      language: repository.language,
    }));
  } catch {
    return null;
  }
};
