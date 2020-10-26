FROM strapi/base

WORKDIR /usr/src/ubuntu/sayedmubarak/strapi/new-blog

COPY package*.json ./

COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV development 

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
