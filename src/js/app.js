import React, { Component } from 'react';
import TodoList from './todolist'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <div>
        Hello World
        <TodoList />
      </div>
    )
  }
}