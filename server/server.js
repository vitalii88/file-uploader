import * as dotenv from 'dotenv';
import 'express-async-errors'
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload'
import { v2 as cloudinary } from 'cloudinary'

import dbConnector from './db/dbConnector.js';
import * as middleware from './middleware/index.js';
import ProductRoutes from './routes/productRoutes.js';


dotenv.config();
const MONGO_URL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT || 5001;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

const app = express();

app.use(express.static('./public'))
app.use(express.json());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));


app.get('/', (req, resp) => {
  resp.send('<h1>File Upload Starter</h1>');
});

app.use('/api/v1/products', ProductRoutes);

app.use(middleware.notFoundMiddleware);
app.use(middleware.errorHandlerMiddleware)


dbConnector(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server run on porn: ${PORT}`);
    });
  }).catch((error) => console.log(error));


