import React from 'react';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
