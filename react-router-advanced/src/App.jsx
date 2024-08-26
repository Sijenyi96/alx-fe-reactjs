import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return ( 
     <Router>
      <Routes>
         <Route path= "/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
   );
}

export default App;
