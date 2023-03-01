<<<<<<< HEAD
FROM node:latest

# Create app directory
COPY . /app
WORKDIR /app

# Install app dependencies
RUN npm install
=======
# build for node
FROM node:latest
# set working directory
COPY . /app
WORKDIR /app
# install and cache app dependencies
RUN npm install

# start app
>>>>>>> bfa171ae57d2923100890496db8b310ece17dad7
CMD ["node", "server.js"]