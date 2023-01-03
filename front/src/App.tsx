import React from 'react';
import './App.css';
import Navbar from './Components/Core/Template';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardPage } from './Pages/Dashboard';
import { AppRoutes } from './Routers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <AppRoutes />
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
