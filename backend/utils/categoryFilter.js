/**
 * @function categoryFilter This function returns an array of categories
 *
 * @param {array} filters an array of filters
 * @returns {Array} An array of the diferent stages of the category. From most general to most specific.
 */

const categoryFilter = (filters) => {
  const filterArray = filters.filter((e) => {
    return e.id === 'category';
  });
  if (filterArray.length > 0) {
    const categoryArray = filterArray[0].values[0].path_from_root;
    const finalArray = categoryArray.map((e) => {
      return e.name;
    });
    return finalArray;
  } else {
    return [];
  }
};

export default categoryFilter;
