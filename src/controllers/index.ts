import { getRepos } from '../services';
import { Request, Response } from 'express';

export const index = async (_: Request, res: Response) => {
  try {
    const repositories = await getRepos();

    res.render('index', { repositories });
  } catch {
    res.render('index', { repositories: [] });
  }
};
