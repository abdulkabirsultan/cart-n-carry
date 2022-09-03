import mongoose from 'mongoose';

const connect = async () => {
  await mongoose.connect('mongodb://localhost:27017/ecommerceDB');
  console.log('Database connected successfully');
};

export default connect;
