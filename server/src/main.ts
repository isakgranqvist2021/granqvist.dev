import 'dotenv/config';
import express from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static(path.resolve('./public')));

app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.resolve('./public/index.html'));
});

const port = process.env.ENVIRONMENT === 'production' ? 80 : 8080;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
