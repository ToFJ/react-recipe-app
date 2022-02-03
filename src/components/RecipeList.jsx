import { useState, useRef } from "react";

const RecipeList = ({ recipes }) => {
  const [isModal, setIsModal] = useState(false);
  const [index, setIndex] = useState(0);
  const modalScrollRef = useRef(null);

  const openModal = i => {
    setIndex(i);
    setIsModal(true);
    modalScrollRef.current.scrollIntoView();
  };

  // console.log(index);
  console.log(recipes?.hits[0].recipe);
  return (
    <>
      <div ref={modalScrollRef} className="recipe-container">
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
        {isModal ? (
          <div className="recipe-modal">
            <div className="recipe-modal__hero">
              <img src={recipes?.hits[index].recipe.image} alt="" />
              <div className="recipe-modal__labels">
                <h1>{recipes?.hits[index].recipe.label}</h1>

                <p>
                  {recipes?.hits[index].recipe.healthLabels.map((type, i) => {
                    console.log(type);
                    return (
                      <span className="recipe-modal__labels-items" key={i}>
                        {" "}
                        {type}
                      </span>
                    );
                  })}
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="recipe-moda__ing">
                  {recipes?.hits[index].recipe.ingredientLines.map((type, i) => {
                    console.log(type);
                    return <p key={i}>{type}</p>;
                  })}
                </div>
              </div>
            </div>
            <button onClick={() => setIsModal(false)} className="recipe-modal__button" type="button">
              X
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default RecipeList;
