import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router';
>>>>>>> 4f98222e29ec6ba2e98bd7957e861da34f32a89b
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return ( 
     <Router>
      <Routes>
         <Route path= "/blog/:id" element={<BlogPost />} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/protectedroute" element={<ProtectedRoute />} />
      </Routes>
    </Router>
   );
}

export default App;
