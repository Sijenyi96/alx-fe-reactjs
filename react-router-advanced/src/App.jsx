import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

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
