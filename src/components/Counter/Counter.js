import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  // constructor() {
  //     super();
  //     this.state = {
  //         value: 0,
  //     };
  // } or:
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = event => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      }; //передавая функцию, записывает основываясь на предыдущем состоянии объекта
    });

    // this.setState({value: 123}); //передавая объект, перезаписывает значение не основываясь на предыдущем состоянии

    // console.log('Кликнули в увеличить');
    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(event.type);

    // const target = event.target; or: if we need asinc function
    // const {target} = event;

    // setTimeout(() => {
    //     console.log(target)
    // }, 2000);
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    // console.log('Кликнули в уменьшить');
    // console.log(this)
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value
          // value={this.state.value}
          value={value}
        />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
