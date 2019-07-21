FROM node:current

LABEL maintainer="apu314@apu314.com"

# Create app directory.
WORKDIR /app

# Update and install dependecies.
RUN apk update && apk upgrade
RUN apk add git

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy the app and build it.
COPY . .

# Build
RUN npm run build

