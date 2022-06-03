import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ value }) => (
  <div>
    <p className={s.text}>Statistics</p>
    <span className={s.span}>Good:{value}</span>
    <br />
    <span className={s.span}>Neutral:</span>
    <br />
    <span className={s.span}>Bad:</span>
  </div>
);

export default Statistics;
