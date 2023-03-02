import './App.css';
import Navbar from './Components/Core/Template';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routers';


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
