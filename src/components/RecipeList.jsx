import { useState, useRef, useEffect } from "react";

import RecipeDetails from "./RecipeDetails";

const RecipeList = ({ recipes, setRecipes }) => {
  const [isModal, setIsModal] = useState(false);
  const [index, setIndex] = useState(0);
  const scrollToRef = useRef(null);

  const openModal = i => {
    setIndex(i);
    setIsModal(true);
    scrollToRef.current.scrollIntoView();
  };

  const fetchNewSite = async link => {
    const resp = await fetch(link);
    const data = await resp.json();
    setRecipes(data);
  };

  const handleNextSite = () => {
    fetchNewSite(recipes._links.next.href);
    scrollToRef.current.scrollIntoView();
  };
  console.log(recipes);
  if (recipes.hits.length <= 0) {
    return (
      <h4 className="error">
        Seems like nothing was found with your specifc ingredients, try other ingredients or reduce the amount of
        ingredients.
      </h4>
    );
  }

  return (
    <>
      <div ref={scrollToRef} className="recipe-container">
        {recipes.hits?.map((recipe, i) => {
          const { image, label: name, mealType, dietLabels, cuisineType, healthLabels } = recipe.recipe;
          return (
            <div key={i} className="recipe__card" onClick={() => openModal(i)}>
              <img src={image} alt={name} />
              {dietLabels[0] && (
                <div className="recipe__labels">
                  {dietLabels.map((label, i) => (
                    <p key={i}> {label}</p>
                  ))}
                </div>
              )}
              <div className="recipe__card-info">
                <h4>{name}</h4>
                <button type="button">&rarr;</button>
              </div>
            </div>
          );
        })}
        {isModal ? <RecipeDetails index={index} recipes={recipes} setIsModal={setIsModal} /> : ""}
        <button type="button" className="new-results-button" onClick={handleNextSite}>
          Found nothing to your liking? Try Again &rarr;
        </button>
      </div>
    </>
  );
};

export default RecipeList;
