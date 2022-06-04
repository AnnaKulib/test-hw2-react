import React from 'react';
// import s from './Statistics.module.css';

const Statistics = ({ value }) => (
  <div>
    <p>Statistics</p>
    <span>Good:{value}</span>
    <br />
    <span>Neutral:</span>
    <br />
    <span>Bad:</span>
  </div>
);

export default Statistics;
