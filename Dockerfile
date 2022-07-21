FROM sitespeedio/node:ubuntu-20.04-nodejs-16.16.0

WORKDIR /usr/src/app

RUN apt update -y
RUN apt upgrade -y
RUN apt install nginx -y

COPY package*.json ./
COPY ./src/ ./src
COPY ./public/ ./public
COPY tsconfig.json .
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh .

RUN npm ci
RUN npm install
RUN npm run build

EXPOSE 80
CMD [ "sh", "start.sh" ]

