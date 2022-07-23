FROM sitespeedio/node:ubuntu-20.04-nodejs-16.16.0

WORKDIR /usr/src/app

RUN apt update -y
RUN apt upgrade -y
RUN apt install nginx -y

COPY package.json .
COPY package-lock.json .
COPY src/ src
COPY public/ public
COPY tsconfig.json .

COPY .docker/start.sh .

COPY .docker/nginx.conf /etc/nginx/nginx.conf
RUN ln -s /etc/nginx/nginx.conf /etc/nginx/sites-enabled/

RUN npm ci
RUN npm install
RUN npm run build

RUN mv dist/* .

RUN rm -rf src
RUN rm tsconfig.json
RUN rm dist -rf

EXPOSE 80

CMD [ "sh", "start.sh" ]