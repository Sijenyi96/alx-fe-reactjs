import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => deletedRecipe === deletedRecipe)
  );

  return (
    <button onClick ={handleDelete}>Delete Recipe</button>
  );
}

export default DeleteRecipeButton;