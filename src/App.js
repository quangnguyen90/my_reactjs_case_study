import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/Todo/TodoItem';
import tick from './img/tick.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'PHP', isComplete: true },
        { title: 'MySQL', isComplete: true },
        { title: 'NodeJS', isComplete: false },
        { title: 'Mongo DB', isComplete: false  },
        { title: 'ReactJS', isComplete: false  },
        { title: 'React Hook', isComplete: false  },
        { title: 'Redux-thunk', isComplete: false  },
        { title: 'Redux-Saga', isComplete: false  },
        { title: 'Docker - LEMP', isComplete: false  },
        { title: 'Vagrant - LAMP', isComplete: false  },
        { title: 'HTML', isComplete: true  },
        { title: 'CSS', isComplete: true  },
        { title: 'Javascript', isComplete: false  },
        { title: 'GIT', isComplete: true  },
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onKeyUp(event) {
    if (event.keyCode === 13) { //enter code
      let text = event.target.value;
      if (!text) {
        return;
      }

      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem : event.target.value
    })
  }

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={tick}  width={32} height={32} />
          <input
            type="text"
            placeholder="Add a new item"
            onKeyUp={this.onKeyUp}
            onChange={this.onChange}
            value={newItem}
          />
        </div>
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
