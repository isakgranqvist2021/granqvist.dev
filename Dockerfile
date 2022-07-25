FROM node:18-alpine3.15

WORKDIR /usr/src/app

RUN mkdir public

COPY client/ client

COPY server/src src
COPY server/package.json .
COPY server/package-lock.json .
COPY server/tsconfig.json .

RUN npm install --prefix client 
RUN npm run build --prefix client

RUN mv client/build/* public/

RUN rm -rf client

RUN npm ci
RUN npm install
RUN npm run build

RUN mv dist/* .

RUN rm -rf src
RUN rm -rf dist

EXPOSE 80
CMD [ "node", "main.js" ]