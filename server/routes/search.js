import Router from 'express-promise-router';
import fetch from 'node-fetch';

const router = Router();

// This should be obtained via configuration file or env in a larger project
const mainUrl = 'https://api.mercadolibre.com/';

const searchFilter = (product) => {
  const productDetails = {
    id: product.id,
    title: product.title,
    price: { amount: product.price },
    picture: product.thumbnail,
    freeShipping: product.shipping.free_shipping,
    state: product.seller_address.state.name,
  };
  return productDetails;
};

router.get('/:id', async (req, res) => {
  const itemSearch = req.params.id;
  try {
    const response = await fetch(
      `${mainUrl}/sites/MLA/search?limit=4&q=${itemSearch}`
    );
    const data = await response.json();
    const searchResults = data.results.map(searchFilter);
    res.send(searchResults);
  } catch (error) {
    console.log(error);
  }
});

export default router;
