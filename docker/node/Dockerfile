FROM node

ARG USER_ID

WORKDIR /app

COPY package.* .

RUN npm install

RUN chown -R $USER_ID node_modules

CMD ["npm", "run" ,"dev"]
