FROM node:latest
WORKDIR /usr/src/app
COPY /dist ./
COPY . .
EXPOSE 3000
CMD [ "node", "main.js" ]

#docker build -t gaobobuq/ftr-app .