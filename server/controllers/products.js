import { NotFoundError } from '../middlewares/customError.js';
import Products from '../models/Products.js';

export const getAllProducts = async (req, res) => {
  const { limit, page } = req.query;
  const tLimit = limit || 10;
  const tPage = page || 1;
  const skip = tLimit * (tPage - 1);
  const products = await Products.find().limit(tLimit).skip(skip);
  const totalProducts = await Products.countDocuments();
  if (!products.length) {
    return res.send('No products available');
  }
  res
    .status(200)
    .json({
      products,
      total: products.length,
      skip,
      limit: tLimit,
      totalProducts,
    });
};

export const getCategories = async (req, res) => {
  const categories = await Products.distinct('category', {});

  res.status(200).json({ categories, count: categories.length });
};

export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Products.find({ id });
  if (!product.length) {
    throw new NotFoundError(`No item with id ${id} found`);
  }
  res.status(200).json(product);
};

export const getProductBySearch = async (req, res) => {
  const { name } = req.query;
  const search = new RegExp(name, 'i');
  const products = await Products.find({ title: search });

  res.status(200).json({ products, nbHits: products?.length });
};

export const getProductsByCategory = async (req, res) => {
  const { limit, page } = req.query;
  const tLimit = limit || 10;
  const tPage = page || 1;
  const skip = tLimit * (tPage - 1);
  const { category } = req.params;
  const products = await Products.find({ category }).limit(tLimit).skip(skip);
  if (!products.length) {
    throw new NotFoundError(`No ${category} category  found`);
  }
  res.status(200).json({
    products,
    total: products.length,
    skip,
    limit: limit || products.length,
  });
};
