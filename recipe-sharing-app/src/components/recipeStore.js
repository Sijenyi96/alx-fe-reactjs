import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),


deleteRecipe: (deletedRecipe) => set(state => ({ recipes: [...state.recipes, deletedRecipe] })),
setRecipes: (recipes) => set({ recipes }),


updateRecipe: (updatedRecipe) => set(state => ({ recipes: [...state.recipes, updatedRecipe] })),
setRecipes: (recipes) => set({ recipes })

  
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
 )})),


}));

export default useRecipeStore;
