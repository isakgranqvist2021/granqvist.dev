FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./src/ ./src
COPY ./public/ ./public
COPY tsconfig.json .
COPY nginx.conf /etc/nginx/nginx.conf

RUN npm ci
RUN npm install
RUN npm run build

EXPOSE 8080 
CMD [ "npm", "start" ]