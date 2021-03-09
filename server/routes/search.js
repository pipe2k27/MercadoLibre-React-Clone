import Router from 'express-promise-router';
import fetch from 'node-fetch';
import author from '../config/author.js';
import productFilter from '../utils/productFilter.js';
import categoryFilter from '../utils/categoryFilter.js';
const router = Router();

// This should be obtained via configuration file or env in a larger project
const mainUrl = 'https://api.mercadolibre.com/';

router.get('/', async (req, res) => {
  const queryTerm = req.query.q;
  try {
    const response = await fetch(
      `${mainUrl}/sites/MLA/search?limit=4&q=${queryTerm}`
    );
    const data = await response.json();
    const products = data.results.map(productFilter);
    const categories = categoryFilter(data.filters);
    const searchResults = {
      author,
      categories,
      items: products,
    };
    res.send(searchResults);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  const queryTerm = req.query.q;
  try {
    const response = await fetch(
      `${mainUrl}/sites/MLA/search?limit=4&q=${queryTerm}`
    );
    const data = await response.json();
    const products = data.results.map(productFilter);
    const categories = categoryFilter(data.filters);
    const searchResults = {
      author,
      categories,
      items: products,
    };
    res.send(searchResults);
  } catch (error) {
    console.log(error);
  }
});

export default router;
