FROM node:18-alpine3.15

WORKDIR /usr/src/app

ARG NODE_ENV
ARG GITHUB_ACCESS_TOKEN

ENV NODE_ENV=$NODE_ENV
ENV GITHUB_ACCESS_TOKEN=$GITHUB_ACCESS_TOKEN

COPY public public
COPY src src
COPY views views
COPY package-lock.json .
COPY package.json .
COPY tsconfig.json .

RUN npm ci
RUN npm install
RUN npm run create-env
RUN npm run build

RUN rm -rf src
RUN rm tsconfig.json

EXPOSE 80
CMD [ "npm", "start" ]