import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './store/RecipeStore';

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  return (
    <div>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;

