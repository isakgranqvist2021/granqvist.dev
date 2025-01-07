import { GithubService } from './github.service';
import compression from 'compression';
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';

const requestHandler = async (_: express.Request, res: express.Response) => {
  try {
    const repositories = await GithubService.getRepositoriesFromGithub();
    res.render('index', { repositories });
  } catch {
    res.render('index', { repositories: [] });
  }
};

const app = express();

if (process.env.NODE_ENV !== 'development') {
  app.disable('x-powered-by');

  const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    standardHeaders: true,
    legacyHeaders: false,
  });

  app.use(rateLimiter);
  app.use(compression());
}

app.use('/public', express.static('./public'));
app.set('view engine', '.ejs');

app.all('*', requestHandler);

app.listen(process.env.PORT || 8080, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `Server started at http://localhost:${process.env.PORT || 8080}`
    );
  }
});
