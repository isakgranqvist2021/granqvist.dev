import 'dotenv/config';
import express from 'express';
import path from 'path';
import http from 'http';

const app = express();

app.use('/public', express.static(path.resolve('./public')));

app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.resolve('./public/index.html'));
});

const port = process.env.ENVIRONMENT === 'production' ? 80 : 8080;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`HTTP Server is listening on port ${port}`);
});
