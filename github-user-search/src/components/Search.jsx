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
        <button type="submit">Search</button>
     </form>

       
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
          <p>Name: {userData.name}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}


     </div>
);

};

export default Search;
