import React, { Component } from 'react';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = { value: "" };
  }

  handleChange = (event) => {
      this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.handleChange(this.state.value);
      this.setState({value: ""});
}

  render() {
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={this.handleSubmit}>
                <input className="new-todo" placeholder="What needs to be done?" value={this.state.value} onChange={this.handleChange} autoFocus/>
            </form>
        </header>
    );
  }
}

export default Header;
