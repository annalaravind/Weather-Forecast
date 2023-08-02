import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WeatherApp from './functioncomp/REACT Projects/WeatherApp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WeatherApp />} />
      </Routes>
    </div>
  )
}

export default App;
