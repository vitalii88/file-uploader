import ProductSchema from '../models/productModel.js';
import { StatusCodes } from 'http-status-codes';

export const createProduct = async (req, resp) => {
  resp.send('create product');
};

export const getAllProducts = async (req, resp) => {
  resp.send('list all products');
};


