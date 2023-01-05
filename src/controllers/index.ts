import { getRepositoriesFromGithub } from '../services';
import { Request, Response } from 'express';

export const index = async (_: Request, res: Response) => {
  try {
    const repositories = await getRepositoriesFromGithub();

    res.render('index', { repositories: repositories ?? [] });
  } catch {
    res.render('index', { repositories: [] });
  }
};
