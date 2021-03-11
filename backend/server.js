import express from 'express';
import cors from 'cors';
import Router from 'express-promise-router';

import itemsEndpoint from './routes/items.js';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());

const router = Router();
app.use(router);

// this is the main endpoint where our front end will be making requests
router.use('/api/items', itemsEndpoint);

app.get('/', async (req, res) => {
  res.send('Api is live.');
});

app.listen(PORT, () => console.log('app is live on port 8000'));
