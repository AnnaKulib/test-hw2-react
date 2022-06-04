import React, { Component } from 'react';
import Counter from './Counter';
import Feedback from './Feedback';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import TodoList from './TodoList';
import intialTodos from '../todos.json';
// import { render } from '@testing-library/react';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: intialTodos,
    // feedbackValues: {
    //   good: 0,
    //   neutral: 0,
    //   bad: 0
    // },
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    // const { good, neutral, bad } = this.state;

    const totalTodosCount = todos.length;
    const completeTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    // console.log(completeTodos);

    return (
      <>
        <h1>Состояние компонента</h1>
        <Counter initialValue={10} />
        <Feedback />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее количество: {totalTodosCount}</p>
          <p>Выполнено: {completeTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
