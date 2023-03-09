FROM node

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 4001

CMD ["npm", "run", "start"]

# docker run -it -d -p 4001:4001 -v savefile:/app/uploads pa022069/uploadimage-api