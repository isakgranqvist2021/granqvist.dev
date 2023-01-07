import axios from 'axios';

// not a real cache 🤫
let cache = new Set<Repository>();

interface Repository {
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
  'OpenAI-App',
  'LitVPNS',
]);

const isNotNull = (repository: object | null): repository is object => {
  return repository !== null;
};

export namespace GithubService {
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
        language: repository.language.replaceAll('#', '%23').toLowerCase(),
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
      if (cache.size !== 0) {
        return Array.from(cache);
      }

      const res = await axios.get(`https://api.github.com/user/repos`, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
      });

      cache = new Set(res.data.map(repositoryMapper).filter(isNotNull));
      return Array.from(cache);
    } catch {
      return null;
    }
  };
}
