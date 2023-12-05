import { Request } from "express";

const productsResponseGetAll = [
  {
    "id": 1,
    "name": "Excalibur",
    "price": "10 peças de ouro",
    "orderId": 1
  },
  {
    "id": 2,
    "name": "Espada Justiceira",
    "price": "20 peças de ouro",
    "orderId": 1
  },
  {
    "id": 3,
    "name": "Lira de Orfeu",
    "price": "1 peça de ouro",
    "orderId": 2
  },
  {
    "id": 4,
    "name": "Armadura de Aquiles",
    "price": "1 peça de ouro",
    "orderId": 2
  },
  {
    "id": 5,
    "name": "Harpa de Dagda",
    "price": "15 peças de ouro",
    "orderId": 3
  },
  {
    "id": 6,
    "name": "fernando",
    "price": "30 peças de ouro",
    "orderId": 4
  },
];
const productsPostRequest = {
  body: {
  "name": "fernandinhooooo",
  "price": "30 peças de ouro",
  "orderId": 4
  }
} as Request;
const productsPostResponse = {
  "id": 8,
  "name": "fernandinhooooo",
  "orderId": 4,
  "price": "30 peças de ouro"
};

export { productsResponseGetAll, productsPostRequest, productsPostResponse };
