import 'dotenv/config';
import express from 'express';
import path from 'path';
import { initHttpServer } from './http';

const app = express();

app.use('/public', express.static(path.resolve('./public')));

app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.resolve('./public/index.html'));
});

initHttpServer(app);
