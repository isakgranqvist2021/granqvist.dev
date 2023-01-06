import axios from 'axios';

export interface Repository {
  description: string | null;
  homepage: string | null;
  html_url: string;
  language: string | null;
  name: string;
  pushed_at: string;
}

const include = new Set([
  'BehanceDesignUI',
  'isakgranqvist.com',
  'MultiplayerChess',
  'VPNFinder',
  'DropStore',
  'GodaddyAffiliate',
]);

const repositoryMapper = (repository: any): Repository | null => {
  try {
    if (!include.has(repository.name)) {
      return null;
    }

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

export const getRepositoriesFromGithub = async (): Promise<
  Repository[] | null
> => {
  try {
    const res = await axios.get(`https://api.github.com/user/repos`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    });

    const repositories: (Repository | null)[] = res.data.map(repositoryMapper);

    return repositories.filter(
      (repository): repository is Repository => repository !== null
    );
  } catch {
    return null;
  }
};
