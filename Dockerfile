FROM hoosin/alpine-nginx-nodejs:latest

WORKDIR /usr/src/app

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

