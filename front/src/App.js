import './App.css';
import Home from './pages/home/Home';

import Calculator from './pages/calculator/Calculator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/Calculadora' Component={Calculator}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
