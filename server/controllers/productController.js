import ProductSchema from '../models/productModel.js';
import { StatusCodes } from 'http-status-codes';

export const createProduct = async (req, resp) => {
  const product = await ProductSchema.create(req.body);
  resp.status(StatusCodes.CREATED).json({ product });
};

export const getAllProducts = async (req, resp) => {
  const products = await ProductSchema.find({});
  resp.status(StatusCodes.OK).json({ products })
};


