import express from 'express';
import mongoose from 'mongoose';
import Products from './models/Products.js';
import populate from './populated.js';
const app = express();
const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ecommerceDB');
    console.log('database connected');
    await Products.insertMany(populate);
    // await Products.deleteMany({});
    await app.listen(2000, console.log('server started'));
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
