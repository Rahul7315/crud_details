import React from 'react';
import EmpListing from './Components/EmpListing';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmpCreate from './Components/EmpCreate';
import EmpEdit from './Components/EmpEdit';
import EmpDetails from './Components/EmpDetails';
function App() {
  return (
    <>
      <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<EmpListing/>}/>
          <Route path="/Emp/create" element={<EmpCreate/>}/>
          <Route path="/Emp/edit/:Empid" element={<EmpEdit/>}/>
          <Route path="/Emp/details/:Empid" element={<EmpDetails/>}/>
        </Routes>
      </BrowserRouter>

      </div>
      
    </>
  );
}

export default App;
