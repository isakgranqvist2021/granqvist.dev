import 'dotenv/config';

const env = {
  environment: process.env.ENVIRONMENT,
  github_access_token: process.env.GITHUB_ACCESS_TOKEN,
};

for (const key in env) {
  if (key === undefined) {
    console.log(`${key} must be set in order to run`);
    process.exit(1);
  }
}

export default env;
