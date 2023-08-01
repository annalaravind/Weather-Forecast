import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <nav className='header'>
      <div className='block2'>
        <ul>
          <li><Link to={'/weather'} className='link'>WeatherApp</Link></li>
          <li><Link to={'/calculator'} className='link'>Calculator</Link></li>
          <li><Link to={'/todoList'} className='link'>TodoList</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar1;
