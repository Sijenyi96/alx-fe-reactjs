import { useState, useEffect } from "react";
import data from "../data.json";

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors('');
  }, []);}

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required';
    if (!ingredients || ingredients.split('\n').length < 2) newErrors.ingredients = 'Please enter at least two ingredients';
    if (!steps) newErrors.steps = 'Preparation steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



function AddRecipeForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setTitle(values => ({...values, ['']: value}))
        setIngredients(values => ({...values, ['']: value}))
        setSteps(values => ({...values, ['']: value}))
        setErrors(values => ({...values, ['']: value}))
      }

    return ( 
        <form onSubmit={handleSubmit} >
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