# build for node
FROM node:latest
# set working directory
COPY . /app
WORKDIR /app
# install and cache app dependencies
RUN npm install

# start app
CMD ["node", "server.js"]