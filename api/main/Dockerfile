FROM node:20

WORKDIR /api/main

COPY package*json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "server"]