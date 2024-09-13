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