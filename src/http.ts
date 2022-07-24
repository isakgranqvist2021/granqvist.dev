import { Application } from 'express';

export const initHttpServer = async (app: Application) => {
  const http = await import('http');

  const port = process.env.ENVIRONMENT === 'production' ? 80 : 8080;

  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`HTTP Server is listening on port ${port}`);
  });
};
