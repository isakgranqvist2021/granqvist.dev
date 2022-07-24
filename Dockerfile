FROM node:18-alpine3.15

WORKDIR /usr/src/app

COPY config/ config
COPY package.json .
COPY package-lock.json .
COPY src/ src
COPY public/ public
COPY tsconfig.json .

RUN npm ci
RUN npm install
RUN npm run build

RUN mv dist/* .

RUN rm -rf src
RUN rm tsconfig.json
RUN rm dist -rf

EXPOSE 80
CMD [ "node", "main.js" ]