FROM node:latest

# Create app directory
COPY . /app
WORKDIR /app

# Install app dependencies
RUN npm install
CMD ["node", "server.js"]