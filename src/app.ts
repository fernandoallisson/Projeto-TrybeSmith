import express from 'express';
import productPouter from './Routes/product.router';
import orderRouter from './Routes/order.router';

const app = express();

app.use(express.json());

app.use(productPouter);
app.use(orderRouter);

export default app;
