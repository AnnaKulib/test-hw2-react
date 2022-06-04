import React from 'react';
import Controls from './Controls';
import Statistics from './Statistics';
// import s from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    value: 0,
    // neutral: 0,
    // bad: 0,
  };

  handleOnButtonClick = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  render() {
    return (
      // <div><Controls onIncrement={this.handleOnButtonClick}/></div>
      <div>
        <p>Please leave feedback</p>
        <Controls value={'Good'} onIncrement={this.handleOnButtonClick} />
        <Statistics value={this.state.value} />
      </div>
    );
  }
}

export default Feedback;
