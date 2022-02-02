import { useEffect, useState } from "react";

import Loading from "./components/Loading";
import RecipeList from "./components/RecipeList";
import SearchField from "./components/SearchField";

function App() {
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState([]);

  const fetchData = async query => {
    try {
      const resp = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${query}&app_id=e2b01b32&app_key=f64ef731352432a614fac3141065a3f7`
      );
      const data = await resp.json();
      setRecipe(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  if (isLoading) return <Loading />;

  return (
    <>
      <SearchField />
      <RecipeList />
    </>
  );
}
export default App;
