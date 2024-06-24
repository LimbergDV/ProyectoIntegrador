import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/molecules/login'
import RegisterUser from './components/molecules/registerUser';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registerUser" element={<RegisterUser/>}/>
      <Route path="/registerAdmin" element={<RegisterUser/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
