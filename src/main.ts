import env from './config';
import router from './routers';
import compression from 'compression';
import express from 'express';
import path from 'path';

const app = express();

app.disable('x-powered-by');
app.set('view engine', '.ejs');

app.use(compression());
app.use('/public', express.static(path.resolve('./public')));
app.use('*', router);

const port = env.environment !== 'production' ? 8080 : 80;

app.listen(port, () => {
  if (env.environment !== 'production') {
    console.log(`Server is listening on http://localhost:${port}`);
    return;
  }

  console.log(`Server is listening on https://granqvist.dev`);
});
