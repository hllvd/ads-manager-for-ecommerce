import React from 'react';
import './App.css';
import Navbar from './Components/Core/Template';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardPage } from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
