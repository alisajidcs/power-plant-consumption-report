# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install


# Copy the rest of the application code to the working directory
COPY . .

# Create Db and seed it
# RUN npx sequelize-cli db:migrate

# RUN npx sequelize-cli db:seed:all

# Expose the port your app is listening on
EXPOSE 8000

# Command to run your application
CMD [ "node", "index.js" ]
