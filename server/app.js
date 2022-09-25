import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connect from './config/connect.js';

//Middlewares
import cors from 'cors';

//routes
import productRouter from './routes/products.js';

//route middleware
import errorHandlerMiddleware from './middlewares/errorHandler.js';
import notFound from './middlewares/not-found.js';
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
//Routes
app.use('/api/v1/products', productRouter);

app.get('/', (req, res) => res.send('<h1>cart n carry server</h1>'));
//Routes Middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  await connect();

  app.listen(port, console.log(`server started on port ${port}`));
};
start();
//https://dummyjson.com/products/
