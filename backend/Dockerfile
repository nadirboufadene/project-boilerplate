# Image source
FROM node:12-buster

# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package.json .

# Then install the NPM module
RUN npm install --force

# Copy current directory to APP folder
COPY . .

EXPOSE 5000
CMD npm run typeorm:run && npm run start:dev