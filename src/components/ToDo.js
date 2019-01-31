import React, { Component } from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class ToDo extends Component {
    constructor(props){
      super(props)
      this.state = { name: this.props.name, editing: this.props.editing}; 
    }
  
    handleClick = () => {
      this.props.handleClick(this.props.index);
    }

    toggleCompleted = () => {
      this.props.toggleCompleted(this.props.index);
    }

    renderCheckbox = () => {

      if(this.props.finished){
        return (
          <input className="toggle" type="checkbox" onClick={this.toggleCompleted} checked/>
        )
      }
      return (
        <input className="toggle" type="checkbox" onClick={this.toggleCompleted}/>
      )
    }

    render() {
      let {finished, name} = this.props;
      let completed;
      if(finished){
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
          <button className="destroy" onClick={this.handleClick}></button>
        </div>
        <input className="edit" defaultValue="Rule the web"/>
       </li>
      );
    }
}
  
  export default ToDo;