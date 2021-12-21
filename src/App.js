import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
