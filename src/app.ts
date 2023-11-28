import express from 'express';
import productPouter from './Routes/product.router';
import orderRouter from './Routes/order.router';
import loginRouter from './Routes/login.router';

const app = express();

app.use(express.json());

// Rotas da aplicação
app.use(productPouter);
app.use(orderRouter);
app.use(loginRouter);

export default app;
