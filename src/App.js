import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/Todo/TodoItem';
import TraffictLight from './components/TrafficLight/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    // this.todoItems = [
    //   { title: 'PHP', isComplete: true },
    //   { title: 'MySQL', isComplete: true },
    //   { title: 'NodeJS' },
    //   { title: 'Mongo DB' },
    //   { title: 'ReactJS' },
    //   { title: 'React Hook' },
    //   { title: 'Redux-thunk' },
    //   { title: 'Redux-Saga' },
    // ];

    this.state = {
      currentColor: RED
    };

    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 3000);
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return (
      // <div className="App">
      //   {this.todoItems.length > 0 &&
      //     this.todoItems.map((item, index) => (
      //       <TodoItem key={index} item={item} />
      //     ))
      //   }
      //   {this.todoItems.length === 0 && 'Nothing here'}
      // </div>

      <TraffictLight currentColor={currentColor} />
    );
  }

}

export default App;
