
import './App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';

import Home from './Pages/home';

import Work from './Pages/work';
import About from './Pages/about';
function App() {
  const [canNavigate, setCanNavigate] = useState(false);
  
  return (
    <Router>
      
    <Routes>
      {/* <Route exact path="" element={<Barclays setCanNavigate={setCanNavigate}/>} />
      <Route exact path="/grid" element={<CustomGrid />}/>
      <Route exact path="/table" element={<MyTable />}/>
      <Route path="/page2" element={<ProtectedRoute canNavigate={canNavigate}><CustomGrid /></ProtectedRoute>} /> */}
       <Route exact path="/" element={<Home />} />
       <Route exact path="/work" element={<Work />} />
       <Route exact path="/about" element={<About />} />
       {/* <Route exact path="/" element={<Home />} />
      <Route exact path="/work" element={<Work />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} /> */}
    </Routes>
  
</Router>
     
  );
}
// const ProtectedRoute = ({ canNavigate, children }) => {
//   if (!canNavigate) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };
export default App;
