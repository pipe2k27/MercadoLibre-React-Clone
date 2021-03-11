import * as format from './numberFormat.js';

/**
 * @function searchFilter this function, given a product from ML's api, returns an object with the
 * required format and properties to be sent through the api
 *
 * @param {string} product obtained from api. full product.
 * @returns {Objetc} the product with the format requested for frontend.
 */

const searchFilter = (product) => {
  const productDetails = {
    id: product.id,
    title: product.title,
    price: {
      amount: format.wholeNumber(product.price),
      currency: product.currency_id,
      decimals: format.decimals(product.price),
    },
    picture: product.thumbnail,
    free_shipping: product.shipping.free_shipping,
    state: product.seller_address.state.name,
  };
  return productDetails;
};

export default searchFilter;
