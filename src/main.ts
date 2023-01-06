import { getRepositoriesFromGithub, Repository } from './github.service';
import compression from 'compression';
import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';

const app = express();

app.disable('x-powered-by');
app.set('view engine', '.ejs');
app.use(compression());

let repositories: Repository[] | null = null;
app.all('*', async (_: Request, res: Response) => {
  try {
    if (!repositories) {
      repositories = await getRepositoriesFromGithub();
    }

    res.render('index', { repositories });
  } catch {
    res.render('index', { repositories: [] });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  if (process.env.ENVIRONMENT !== 'production') {
    console.log(`Server is listening on http://localhost:${port}`);
    return;
  }

  console.log(`Server is listening on https://granqvist.dev`);
});
