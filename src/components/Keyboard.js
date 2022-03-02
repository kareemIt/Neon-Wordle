import React from 'react';
import '../style.css';

const Keyboard = ({ keys1, keys2, keys3 }) => (
  <div>
    <div className="container">
      {keys1.map((key, index) => (
        <div key={index}>
          <span>{key}</span>
        </div>
      ))}
    </div>
    <div className="container">
      {keys2.map((key, index) => (
        <div key={index}>
          <span>{key}</span>
        </div>
      ))}
    </div>
    <div className="container">
      {keys3.map((key, index) => (
        <div key={index}>
          <span>{key}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Keyboard;
