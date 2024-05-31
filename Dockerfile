# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container to the server directory
WORKDIR /usr/src/app/server

# Copy the server's package.json and package-lock.json
COPY server/package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the server directory contents into the container
COPY server/ .

EXPOSE 5003

# Define the command to run the app
CMD ["node", "server.js"]

