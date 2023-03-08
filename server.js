import express from 'express';
import path from 'path';
import url from 'url';
import authConfig from './auth-config.js';
// import {data} from "./data.js";
// import { product } from './product.js';
import * as database from './database.js';

const app = express();
app.use(express.static('public'));

const PORT = 8080;

async function getProducts(req, res) {
  res.json(await database.listProducts());
}


async function getProduct(req, res) {
  const result = await database.findProduct(req.params.id);
  if (!result) {
    res.status(404).send('no match for that id');
    return;
  }
  res.json(result);
}

app.get('/auth-config', (req, res) => {
  res.json(authConfig);
});

// app.get("/data",(req,res) => {
//   res.json(data);
// });

// app.get('/product', (req, res) => {
//   res.json(product);
// });

app.get('/product', getProducts);
app.get('/product/:id', getProduct);


app.get('/product/:id', (req, res) => {
  // console.table(bricks);
  for (const item of getProducts) {
    // eslint-disable-next-line eqeqeq
    if (item.id == req.params.id) {
      res.json(item);
      return;
    }
  }
  // res.status(404).send('No match for that source');
});


app.get('/database', (res, req) => {
  res.json(database);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
