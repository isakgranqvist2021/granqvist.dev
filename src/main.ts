import { GithubService } from './github.service';
import compression from 'compression';
import 'dotenv/config';
import express from 'express';

const requestHandler = async (_: express.Request, res: express.Response) => {
  try {
    const repositories = await GithubService.getRepositoriesFromGithub();
    res.render('index', { repositories });
  } catch {
    res.render('index', { repositories: [] });
  }
};

const app = express();

app.use('/public', express.static('./public'));
app.disable('x-powered-by');
app.set('view engine', '.ejs');
app.use(compression());
app.all('*', requestHandler);

app.listen(process.env.PORT || 8080, () =>
  console.log(`app listening on ${process.env.PORT || 8080}`)
);
