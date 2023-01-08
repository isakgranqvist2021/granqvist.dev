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

const options = {
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
};

app.use(rateLimit(options));
app.use('/public', express.static('./public'));
app.disable('x-powered-by');
app.set('view engine', '.ejs');
app.use(compression());
app.all('*', requestHandler);

app.listen(process.env.PORT || 8080, () =>
  console.log(`app listening on ${process.env.PORT || 8080}`)
);
