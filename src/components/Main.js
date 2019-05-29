import React, { Component } from 'react';
import ToDo from './ToDo.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class Main extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let createToDo = (val, index) => {
      if(this.props.filter === 0 ||
        (this.props.filter === 1 && val.finished === false) ||
        (this.props.filter === 2 && val.finished === true))
        return (
          <ToDo
            name={val.name}
            editing={val.editing}
            finished={val.finished}
            index={index}
            deleteToDo={this.props.deleteToDo}
            toggleCompleted={this.props.toggleCompleted}
            key={index}
          />
        );
      else
        return null;
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onClick={this.props.markallcompleted}/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              { /* <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
              {this.props.todolist.map(createToDo)}
            </ul>
        </section>
    );
  }
}

export default Main;