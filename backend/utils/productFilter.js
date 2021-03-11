import * as format from './numberFormat.js';

/**
 * @function productFilter this function, given a product and a description from the ML api, returns an object with the format and properties
 * required to be sent via api. Formats data for the api/items/id: endpoint.
 *
 * @param {string} product obtained from api. full product.
 * @param {string} description obtained from api. product description.
 * @returns {Objetc} the product with the format requested for frontend.
 */

const productFilter = (product, description) => {
  const productCondition = product.condition === 'new' ? 'Nuevo' : 'Usado';

  const productDetails = {
    id: product.id,
    title: product.title,
    price: {
      amount: format.wholeNumber(product.price),
      currency: product.currency_id,
      decimals: format.decimals(product.price),
    },
    picture: product.pictures[0].url,
    condition: productCondition,
    free_shipping: product.shipping.free_shipping,
    state: product.seller_address.state.name,
    sold_quantity: product.sold_quantity,
    description: description.plain_text,
  };
  return productDetails;
};

export default productFilter;
