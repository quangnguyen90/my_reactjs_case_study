import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/Todo/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'PHP', isComplete: true },
      { title: 'MySQL', isComplete: true },
      { title: 'NodeJS' },
      { title: 'Mongo DB' },
      { title: 'ReactJS' },
      { title: 'React Hook' },
      { title: 'Redux-thunk' },
      { title: 'Redux-Saga' },
    ];
  }
  render() {
    return (
      <div className="App">
        {this.todoItems.length > 0 &&
          this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))
        }
        {this.todoItems.length === 0 && 'Nothing here'}
      </div>
    );
  }

}

export default App;
