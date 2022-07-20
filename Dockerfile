FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./src/ ./src
COPY ./public/ ./public
COPY tsconfig.json .
# COPY nginx.conf /etc/nginx/nginx.conf

RUN npm ci
RUN npm install
RUN npm run build

EXPOSE 80
CMD [ "npm", "start" ]


aws ecs execute-command --region eu-central-1 --cluster arn:aws:ecs:eu-central-1:691501026636:cluster/granqvistdev --task c3c357b09d09404da5b9dbea2b962548 --container latest --command "/bin/bash" --interactive