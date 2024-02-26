FROM node:20

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000