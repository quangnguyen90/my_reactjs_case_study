import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/Todo/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: 'PHP', isComplete: true },
        { title: 'MySQL', isComplete: true },
        { title: 'NodeJS' },
        { title: 'Mongo DB' },
        { title: 'ReactJS' },
        { title: 'React Hook' },
        { title: 'Redux-thunk' },
        { title: 'Redux-Saga' },
        { title: 'Docker - LEMP' },
        { title: 'Vagrant - LAMP' },
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'Javascript' },
        { title: 'GIT' },
      ]
    }
  }

  onItemClicked(item) {
    return (event) => {
      //console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1),
        ]
      });
    };
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        {todoItems.length > 0 &&
          todoItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClicked(item)} />
          ))
        }
        {todoItems.length === 0 && 'Nothing here'}
      </div>
    );
  }

}

export default App;
