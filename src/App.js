//React
import React from 'react';
//Styles
import './GlobalStyles/App.module.scss';
//Context
import { GlobalProvider } from './Contexts/GlobalState';
//Components
import Header from './Components/Header/Header';
//Pages
import Login from './Pages/Login';
import PadCards from './Pages/PadCards';
//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/padcards" element={<PadCards />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
