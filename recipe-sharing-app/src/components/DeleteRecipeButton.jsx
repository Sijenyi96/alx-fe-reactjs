import { useRecipeStore } from './RecipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => deletedRecipe === deletedRecipe)
  );

  return (
    <button onClick ={handleDelete}>Delete Recipe</button>
  );
}

export default DeleteRecipeButton;
