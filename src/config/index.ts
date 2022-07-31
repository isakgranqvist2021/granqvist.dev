import 'dotenv/config';

const env = {
  environment: process.env.ENVIRONMENT,
  github_access_token: process.env.GITHUB_ACCESS_TOKEN,
};

export default env;
