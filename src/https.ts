import { Application } from 'express';

export const initHttpsServer = async (app: Application) => {
  const https = await import('https');
  const fs = await import('fs');
  const path = await import('path');

  const key = fs.readFileSync(path.resolve('./config/private.key'));
  const cert = fs.readFileSync(path.resolve('./config/certificate.crt'));

  const config = { key: key.toString(), cert: cert.toString() };
  const server = https.createServer(config, app);

  server.listen(443, () => {
    console.log(`HTTPS Server is listening on port ${443}`);
  });
};
