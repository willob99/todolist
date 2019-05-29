import React, { Component } from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = { filter: 0 };
  }

  showall = () => {
    this.props.updateFilter(0);
    this.setState({filter: 0});
  }

  renderallbutton = () => {
    if(this.state.filter === 0){
      return (
      <a className="selected" href="#/" onClick={this.showall}>All</a>
      )
    }
    return (
      <a href="#/" onClick={this.showall}>All</a>
    )
  }

  showactive = () => {
    this.props.updateFilter(1);
    this.setState({filter: 1});
  }

  renderactivebutton = () => {
    if(this.state.filter === 1){
      return (
        <a className="selected" href="#/active" onClick={this.showactive}>Active</a>
      )
    }
    return (
      <a href="#/active" onClick={this.showactive}>Active</a>
    )
  }

  showcompleted = () => {
    this.props.updateFilter(2);
    this.setState({filter: 2});
  }

  rendercompletedbutton = () => {
    if(this.state.filter === 2){
      return (
        <a className="selected" href="#/completed" onClick={this.showcompleted}>Completed</a>
      )
    }
    return (
      <a href="#/completed" onClick={this.showcompleted}>Completed</a>
    )
  }

  clearCompleted = () => {
    this.props.clearCompleted();
  }

  render() {
    if(this.props.length === 0){
      return null;
    }
    return (
        <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count"><strong>0</strong> item left</span>
            {/* <!-- Remove this if you don't implement routing --> */}
            <ul className="filters">
              <li>
                {this.renderallbutton()}
              </li>
              <li>
                {this.renderactivebutton()}
              </li>
              <li>
                {this.rendercompletedbutton()}
              </li>
            </ul>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>
        </footer>
    );
  }
}

export default Footer;