import env from './config';
import router from './routers';
import compression from 'compression';
import express from 'express';

const app = express();

app.disable('x-powered-by');
app.set('view engine', '.ejs');

app.use(compression());
app.use('*', router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  if (env.environment !== 'production') {
    console.log(`Server is listening on http://localhost:${port}`);
    return;
  }

  console.log(`Server is listening on https://granqvist.dev`);
});
