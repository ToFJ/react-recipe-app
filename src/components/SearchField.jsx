const SearchField = () => {
  return (
    <div className="search-container">
      <div className="search">
        <label htmlFor="search">
          Enter one or more ingredients (e.G noodle chicken) that you have available and we will show you the best
          recipes for you to cook!
        </label>
        <input type="text" id="search" name="serach" placeholder="e.G coffee chicken" />
      </div>
    </div>
  );
};

export default SearchField;
