import 'dotenv/config';
import express from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.resolve('./public')));

app.get('/', (_, res) => res.render('index'));

const port = process.env.ENVIRONMENT === 'production' ? 80 : 8080;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
