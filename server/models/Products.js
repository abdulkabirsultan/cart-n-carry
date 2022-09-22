import mongoose from 'mongoose';
const productSchema = mongoose.Schema(
  {
    id: { type: Number, required: [true, 'please provide id'] },
    title: { type: String, required: [true, 'please provide title'] },
    description: { type: String },
    price: { type: Number, required: [true, 'please provide price'] },
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    amount: {
      type: Number,
      required: [true, ' please provide amount of products'],
    },
    brand: { type: String, required: [true, 'Please Provide brand name'] },
    category: { type: String, required: [true, 'please provide a category'] },
    thumbnail: String,
    images: [String],
    comments: [String],
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
