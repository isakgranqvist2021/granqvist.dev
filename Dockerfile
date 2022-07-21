FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

<<<<<<< Updated upstream
=======
COPY package.json .
COPY package-lock.json .
COPY src/ src
COPY tsconfig.json .

COPY public/ public

COPY .docker/nginx.conf /etc/nginx/nginx.conf
COPY .docker/start.sh .

RUN npm ci
>>>>>>> Stashed changes
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./dist/* .
COPY ./public/* ./public

EXPOSE 8080 
CMD [ "node", "main.js" ]