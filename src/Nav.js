import React from 'react';
import './App.css';
import Calculator from './Calculator';
import PastCalculations from './PastCalculations';

function Nav() {
  return (
    <nav>
      <ul>
        <li>Calculator</li>
        <li>PastCalculations</li>
      </ul>
    </nav>
  );
}

export default Nav;
