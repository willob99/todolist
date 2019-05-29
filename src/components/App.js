import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.js'
import MainContainer from './containers/MainContainer.js'
import FooterContainer from './containers/FooterContainer.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {todolist: [], filter: 0};
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <HeaderContainer/>
          <MainContainer todolist={this.state.todolist}/>
          <FooterContainer/>
        </section>
      </div>
    );
  }
}

/* BUGS TO FIX
* Clear completed doesn't really 
*     Also make the button go away when there are none left
* Get the counter to work
* Down arrow thing
*     make it work and make it go away when its supposed to
* Upload to github
*/


export default App;