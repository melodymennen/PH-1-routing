import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import People from './People/People';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import Character from './Character/Character';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <div>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/people" >People</Link>
        </div>
        <Route exact path="/" component={ Home } />
        <Route path="/about" render={ () => 
          <About>
            <Route path="/about/faq" component={ FAQ } />
            <Route path="/about/company" component={ Company } />
          </About>
        } />
        <Route path="/people" component={ People }/>
        <Route path="/people/:id" component={ Character }/>
      </div>
    );
  }
}

export default App;
