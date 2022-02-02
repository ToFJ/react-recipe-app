const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-container">
      {recipes.hits?.map((recipe, i) => {
        const { image, label: name, mealType, dietLabels, cuisineType, healthLabels } = recipe.recipe;

        console.log(recipe.recipe);
        return (
          <div key={i} className="recipe__card">
            <img src={image} alt={name} />
            {dietLabels[0] && (
              <div className="recipe__labels">
                {dietLabels.map(label => (
                  <p> {label}</p>
                ))}
              </div>
            )}
            <div className="recipe__card-info">
              <h4>{name}</h4>
              <button>&rarr;</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
