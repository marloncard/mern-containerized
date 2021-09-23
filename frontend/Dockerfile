FROM node:14

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json to image
COPY package*.json ./

# Install app dependencies
RUN npm install

# For production use:
# RUN npm ci --only=production

# Copy all app files to image
COPY . .

# Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]