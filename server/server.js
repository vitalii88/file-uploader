import * as dotenv from 'dotenv';
import 'express-async-errors'
import express from 'express';
import cors from 'cors';

import dbConnector from './db/dbConnector.js';
import * as middleware from './middleware/index.js';
import ProductRoutes from './routes/productRoutes.js';


dotenv.config();
const MONGO_URL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(cors());

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


