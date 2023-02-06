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
  355564116, 370129939, 413560056, 472047527, 383219277, 583104477, 311357297,
  395044515,
]);

const isNotNull = (repository: object | null): repository is object => {
  return repository !== null;
};

export namespace GithubService {
  const repositoryMapper = (repository: any): Repository | null => {
    try {
      if (!include.has(repository.id)) {
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
    } catch (err) {
      console.error(err);
      return null;
    }
  };
}
