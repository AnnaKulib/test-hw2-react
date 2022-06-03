import React from 'react';
import s from './Controls.module.css';

const Controls = ({ value, onIncrement }) => (
  <button className={s.button} type="button" onClick={onIncrement}>
    {value}
  </button>
);
export default Controls;
