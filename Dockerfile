FROM node:18-alpine3.15

WORKDIR /usr/src/app

COPY public public
COPY src src
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

RUN npm ci
RUN npm install
RUN npm run build

RUN mv dist/* .

RUN rm -rf src
RUN rm -rf dist
RUN rm tsconfig.json

EXPOSE 80
CMD [ "node", "main.js" ]