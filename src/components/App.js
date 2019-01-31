import React, { Component } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {todolist: [], filter: 0};
  }

  handleChange = (value) => {
    if(value === "")
      return;
    value.trim();
    let newtodo = {
      name: value,
      editing: false,
      finished: false
    }
    let array = this.state.todolist;
    array.push(newtodo);
    this.setState({todolist: array});
  }

  /* Remove an item */
  handleClick = (index) => {
    let array = this.state.todolist;
    array.splice(index, 1);
    this.setState({todolist: array});
  }

  applyFilter = (filter) => {
    this.setState({filter: filter});
  }

  toggleCompleted = (index) => {
    let array = this.state.todolist;
    array[index].finished = !array[index].finished;
    this.setState({todolist: array}); 
  }

  clearcompleted = () => {
    let array = this.state.todolist.filter((value, index) => {
      return !value.finished;
    });
    this.setState({todolist: array});
  }

  markallcompleted = () => {
    // Do stuff
  }

  rendermain = () => {
    if(this.state.todolist.length > 0)
      return (
        <Main todolist={this.state.todolist} handleClick={this.handleClick} filter={this.state.filter} toggleCompleted={this.toggleCompleted}/>
      )
    else
      return null;
  }

  renderfooter = () => {
    if(this.state.todolist.length > 0)
      return (
        <Footer applyFilter={this.applyFilter} clearcompleted={this.clearcompleted}/>
      )
    else
      return null;
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header handleChange={this.handleChange} />
          {this.rendermain()}
          {this.renderfooter()}
        </section>
      </div>
    );
  }
}

export default App;