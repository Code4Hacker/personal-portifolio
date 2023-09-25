import React from 'react';
import Home from './Component/Home/home/Home';
import { Navbar } from './Component/Home/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Component/Projects/Projects';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div>
            <Navbar/>
            <Home/>
          </div>
        } />
      </Routes>
      <Route path='/projects' element={<Projects />} />
    </BrowserRouter>
  )
}

export default App;