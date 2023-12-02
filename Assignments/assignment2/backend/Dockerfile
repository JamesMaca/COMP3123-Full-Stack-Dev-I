# BACKEND

# FROM node
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 3030
# CMD ["npm", "start"]

# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app/backend

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3030

# Define environment variable for MongoDB connection (adjust as needed)
ENV MONGO_URI=mongodb://mongo:27017/comp3123_assigment2

# Command to run your application
CMD ["npm", "start"]
