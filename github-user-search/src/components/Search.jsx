import React, {useState} from 'react';
import fetchUserData from '../services/githubService';

const Search =() => {
  const [username, setUsername] =useState ('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] =useState ('');
  const handleSubmit = async(e) =>{
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };



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
