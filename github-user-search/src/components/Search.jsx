import React, {useState} from 'react';


const Search =() => {
  const [username, setUsername] =useState ('');
  const [error, setError] =useState ('');
  const handleSubmit = (e) =>{
    e.preventDefault();
}

[ "if (! username )", setError]

return (
    <div>
     <form onSubmit={handleSubmit}>
         <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter username"
         />
        <button type="submit">Submit</button>
     </form>
     </div>
);

};

export default Search;
