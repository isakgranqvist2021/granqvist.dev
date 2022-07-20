import express from 'express';
import path from 'path';

const app = express();

app.disable('x-powered-by');

app.use('/public', express.static(path.resolve('./public')));

app.get('/', (_, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.sendFile(path.resolve('./public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
