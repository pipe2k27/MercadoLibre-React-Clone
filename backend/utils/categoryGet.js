import fetch from 'node-fetch';

const mainUrl = 'https://api.mercadolibre.com/';

/**
 * @function categoryGet This function returns an array of categories given a category id (of a determined product)
 *
 * @param {string} id id of the product you wish to get the category.
 * @returns {Array} An array of the diferent stages of the category. From most general to most specific.
 */

const categoryGet = async (id) => {
  const response = await fetch(`${mainUrl}/categories/${id}`);
  const data = await response.json();
  const categoryArray = data.path_from_root.map((e) => {
    return e.name;
  });
  return categoryArray;
};

export default categoryGet;
