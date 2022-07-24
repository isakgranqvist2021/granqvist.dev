import 'dotenv/config';
import express from 'express';
import path from 'path';
import { initHttpsServer } from './https';
import { initHttpServer } from './http';

const environment = process.env.ENVIRONMENT ?? 'development';
const app = express();

app.use('/public', express.static(path.resolve('./public')));

app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.resolve('./public/index.html'));
});

if (environment === 'production') {
  initHttpsServer(app);
}

initHttpServer(app);
