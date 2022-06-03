import React, { Component } from 'react';
import s from './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  // show = () => {
  //     this.setState({ visible: true});
  // };

  // hide = () => {
  //     this.setState({ visible: false});
  // };

  render() {
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <button
          tupe="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>
        {/* <button tupe="button" className="Dropdown__toggle" onClick={this.show}>
                    Показать
                </button>
                <button tupe="button" className="Dropdown__toggle" onClick={this.hide}>
                    Скрыть
                </button> */}
        {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
