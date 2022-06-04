import React from 'react';
// import s from './Controls.module.css';

const Controls = ({ value, onIncrement }) => (
  //  ({ options, onIncrement }) => (
  //   <ul>{options.map((option) =>
  //   <li
  //     className={s.item}
  //     key={option}
  //     >
  //     <button
  //       type='button'
  //       className={s.button}
  //       name={option}
  //       onClick={onIncrement}
  //       >
  //         {option}
  //         </button>
  //         </li>
  //   )}
  //         </ul>
  <button type="button" onClick={onIncrement}>
    {value}
  </button>
);
export default Controls;
