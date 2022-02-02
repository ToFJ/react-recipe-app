import { useRef } from "react";

const SearchField = ({ setQuery }) => {
  const searchRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(searchRef.current.value);
    e.target.reset();
  };

  return (
    <div className="search-container">
      <div className="search">
        <form className="search" onSubmit={e => handleSubmit(e)}>
          <label htmlFor="search">
            Enter one or more ingredients (e.G noodle chicken) that you have available and we will show you the best
            recipes for you to cook!
          </label>
          <input ref={searchRef} type="text" id="search" name="serach" placeholder="e.G coffee chicken" />
        </form>
      </div>
    </div>
  );
};

export default SearchField;
