React.useEffect(() => {
  if (has(data?.data, "_embedded") && !!listC.length) {
    const filtered = filterCategoriesByJobTitle(
      data?.data._embedded.categories,
      selectedJobTitle
    );
    console.log(filtered);
    const filteredCat = filtered.filter((cat) => listC[cat?.id]?.length > 0);
    console.log(filteredCat);
    filteredCat.sort(dynamicSort("name"));

    setCategories(filtered);

    setCategoriesInitialized(true);
  }
}, [data?.data, isSuccess, selectedJobTitle?.id]);
