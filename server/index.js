import express from 'express';
import cors from 'cors';
import Router from 'express-promise-router';
import fetch from 'node-fetch';

import searchEndpoint from './routes/search.js';

const app = express();
app.use(cors());

const router = Router();
app.use(router);
app.listen(8000, () => console.log('app is live on port 8000'));

const mainUrl = 'https://api.mercadolibre.com/';

router.use('/products', searchEndpoint);

app.get('/', async (req, res) => {
  const response = await fetch(`${mainUrl}/sites/MLA/search?limit=4&q=pokemon`);
  const data = await response.json();
  res.send(data);
});
