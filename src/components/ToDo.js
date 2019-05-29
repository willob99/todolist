import React, { Component } from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class ToDo extends Component {
    constructor(props){
      super(props)
      this.state = { name: this.props.name, editing: this.props.editing, finished: this.props.finished }; 
    }
  
    deleteToDo = () => {
      this.props.deleteToDo(this.props.index);
    }

    toggleCompleted = () => {
      this.props.toggleCompleted(this.props.index);
      this.setState({ finished: true })
    }

    renderCheckbox = () => {

      if(this.props.finished){
        return (
          <input className="toggle" type="checkbox" onClick={this.toggleCompleted} defaultChecked/>
        )
      }
      return (
        <input className="toggle" type="checkbox" onClick={this.toggleCompleted}/>
      )
    }

    render() {
      let {name} = this.props;
      let completed;
      if(this.state.finished){
        completed = "completed";
      }
      else {
        completed = "";
      }
      

      return (
        <li className={completed}>
        <div className="view">
          {this.renderCheckbox()}
          <label>{name}</label>
          <button className="destroy" onClick={this.deleteToDo}></button>
        </div>
        <input className="edit" defaultValue="Rule the web"/>
       </li>
      );
    }
}
  
  export default ToDo;