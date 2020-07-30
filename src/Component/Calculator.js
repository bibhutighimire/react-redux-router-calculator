import React from 'react';
import '../App.css';

function Calculator() {
  return (
    <><h1>Calculator</h1>
    <div>
    <label htmlFor="inputOne">Input One</label>
    <input type="text" value="inputOne"/>
    </div>

    <div>
    <label htmlFor="selectOperator">Select Operator</label>
    <input type="text" value="inputOne"/>
    </div>

    <div>
    <label htmlFor="inputTwo">Input Two</label>
    <input type="text" value="inputTwo"/>
    </div>

    <div>
    <button>Calculate</button>
    </div>
    </>
  );
}

export default Calculator;
