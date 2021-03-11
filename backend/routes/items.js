import Router from 'express-promise-router';
import fetch from 'node-fetch';
import author from '../config/author.js';
import searchFilter from '../utils/searchFilter.js';
import productFilter from '../utils/productFilter.js';
import categoryFilter from '../utils/categoryFilter.js';
import categoryGet from '../utils/categoryGet.js';
const router = Router();

const mainUrl = 'https://api.mercadolibre.com/';

// this get method fetches the results from the product serch in ML's api and sends
// the data with the required format. This is the method used for product search in frontend.
//on a larger project endpoints could be documented using swagger

router.get('/', async (req, res) => {
  const queryTerm = req.query.q;
  try {
    const response = await fetch(
      `${mainUrl}/sites/MLA/search?limit=4&q=${queryTerm}`
    );
    const data = await response.json();
    const products = data.results.map(searchFilter);
    const categories = categoryFilter(data.filters);
    const searchResults = {
      author,
      categories,
      items: products,
    };
    res.status(200).send(searchResults);
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ error });
  }
});

// this get method fetches the product details, description and category in ML's api and sends
// the data with the required format. This is the method used for full individula item dispplay in frontend.

router.get('/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const productResponse = await fetch(`${mainUrl}/items/${productId}`);
    const productData = await productResponse.json();
    const descriptionResponse = await fetch(
      `${mainUrl}/items/${productId}/description`
    );
    const descriptionData = await descriptionResponse.json();
    const filteredProduct = productFilter(productData, descriptionData);
    const category = await categoryGet(productData.category_id);
    const item = {
      author,
      item: filteredProduct,
      category,
    };
    res.status(200).send(item);
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error });
  }
});

export default router;
