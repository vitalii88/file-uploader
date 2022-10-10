import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url'
import { StatusCodes } from 'http-status-codes';
import { CustomApiError, BadRequestError } from '../errors/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadProductImage = async (req, resp) => {
  // check if file exist
  if (!req.files) {
    throw new BadRequestError('No File Uploaded');
  }
  // End check exist

  const productImage = req.files.image;
  // check format
  if (!productImage.mimetype.startsWith('image')) {
    throw new BadRequestError('Please upload Image');
  }
  // END check format

  // check size
  const maxSize = 4000 * 1024;
  if (productImage.size > maxSize) {
    throw new BadRequestError('Pleas upload smoller file');
  }
  // END check size


  const imagePath = path.join(__dirname, '../public/uploads/');
  if (!fs.existsSync(imagePath)) {
    fs.mkdirSync(imagePath, { recursive: true });
  }

  await productImage.mv(imagePath + productImage.name);

  resp.status(StatusCodes.OK).json({ image: { src: `/uploads/${productImage.name}`} })
};
