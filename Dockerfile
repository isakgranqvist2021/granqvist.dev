FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./src/ ./src
COPY ./public/ ./public
COPY tsconfig.json .
# COPY .aws/task-definition.json .aws/task-definition.json

RUN npm ci
RUN npm install
RUN npm run build

EXPOSE 8080 
CMD [ "npm", "start" ]