import { Repository, getRepositoriesFromGithub } from './github.service';
import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

const setCache = async (repos: Repository[]) => {
  await client.connect();
  await client.set('repos', JSON.stringify(repos));
  await client.disconnect();
};

export const getRepos = async (): Promise<null | Repository[]> => {
  const freshData = await getRepositoriesFromGithub();

  return freshData;
  //   await client.connect();
  //   const cache = await client.get('repos');
  //   await client.disconnect();

  //   if (!cache) {
  //     if (freshData) {
  //       await setCache(freshData);
  //     }

  //     return freshData;
  //   }

  //   return JSON.parse(cache);
};
