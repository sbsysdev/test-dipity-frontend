FROM node:18.14.2-alpine3.16 AS dev

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json .

RUN npm i

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
