import * as format from './numberFormat.js';

const productFilter = (product) => {
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

export default productFilter;
