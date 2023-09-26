import React from 'react';
import Home from './Component/Home/home/Home';
import { Loader, Navbar } from './Component/Home/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Component/Projects/Projects';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div>

            <Loader />
            <Navbar />
            <Home />
          </div>
        } />
        <Route path='/projects' element={
          <div>
            {/* <Loader /> */}
            <Projects />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;