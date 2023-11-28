import express from 'express';
import productPouter from './Routes/product.router';

const app = express();

app.use(express.json());

app.use(productPouter);

export default app;
