# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
#COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]