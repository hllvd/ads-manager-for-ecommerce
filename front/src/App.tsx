import React from 'react';
import './App.css';
import Navbar from './Components/Core/Template';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<>content</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
