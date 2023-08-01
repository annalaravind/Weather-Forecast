import React from 'react';
import Navbar1 from './functioncomp/Navbar/Navbar1';
import { Routes, Route } from 'react-router-dom';
import WeatherApp from './functioncomp/REACT Projects/WeatherApp';
import TodoList from './functioncomp/REACT Projects/TodoList';
import Calculator from './functioncomp/REACT Projects/Calculator';

const App = () => {
  return (
    <div>
      <Navbar1 />
      <Routes>
        <Route path='/weather' element={<WeatherApp />} />
        <Route path='/todoList' element={<TodoList />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
    </div>
  )
}

export default App;
