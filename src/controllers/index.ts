import { getRepositories } from '../services';
import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
  try {
    const repositories = await getRepositories();

    res.render('index', { repositories });
  } catch(err) {
    console.log(err);
    res.render('index', { repositories: [] });
  }
};
