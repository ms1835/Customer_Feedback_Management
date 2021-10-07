FROM node:14

WORKDIR /home/mayank/github/Customer_Feedback_Management

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD ["node","index.js"]