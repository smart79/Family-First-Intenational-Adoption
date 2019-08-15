import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/About';
import Footer from './Components/toolbar/footer';
import NavMenu from './Components/toolbar/navMenu';
import Contact from './Components/Conatct';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Router>
        <Footer />
      </div>

    )
  }
}

export default App;