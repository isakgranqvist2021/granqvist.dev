import { getRepositoriesFromGithub, Repository } from '../services';
import { Request, Response } from 'express';

let repositories: Repository[] | null = null;

export const index = async (_: Request, res: Response) => {
  try {
    if (!repositories) {
      repositories = await getRepositoriesFromGithub();
    }

    res.render('index', { repositories });
  } catch {
    res.render('index', { repositories: [] });
  }
};
