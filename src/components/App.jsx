import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Feedback from './Feedback/Feedback';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <>
      <h1>Состояние компонента</h1>
      <Counter initialValue={10} />
      <Feedback />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
    </>
  );
};

export default App;
