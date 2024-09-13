import { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);}



function AddRecipeForm() {
    return ( 
        <form>
           <label>Recipe title:
                <input type="text" />
           </label>
           <textarea>
              Ingredients.
           </textarea>
           <textarea>
              Preparation steps
           </textarea>
           <input type="submit" />
        </form>
     );
}

export default AddRecipeForm;