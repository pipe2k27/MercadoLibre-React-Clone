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
