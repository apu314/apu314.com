FROM node:current

LABEL maintainer="apu314@apu314.com"

# Create app directory.
WORKDIR /app

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy the app and build it.
COPY . .

# Build
RUN npm run build
