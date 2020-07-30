import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <ul>
        <Link to='/Home'><li>Home</li></Link>
        <Link to='/Calculator'><li>Calculator</li></Link>
        <Link to='/PastCalculations'><li >PastCalculations</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
