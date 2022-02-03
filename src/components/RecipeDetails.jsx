const RecipeDetails = ({ recipes, index, setIsModal }) => {
  return (
    <div className="overlay">
      <div className="recipe-modal">
        <div className="recipe-modal__hero">
          <img src={recipes?.hits[index].recipe.image} alt="" />
          <div className="recipe-modal__labels">
            <h1>{recipes?.hits[index].recipe.label}</h1>
            <p className="psa">
              {recipes?.hits[index].recipe.healthLabels.map((type, i) => {
                return (
                  <span className="recipe-modal__labels-items" key={i}>
                    {" "}
                    {type}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div className="recipe-moda__ing">
          {recipes?.hits[index].recipe.ingredientLines.map((type, i) => {
            return <p key={i}>{type}</p>;
          })}
        </div>
        <button onClick={() => setIsModal(false)} className="recipe-modal__button" type="button">
          X
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
