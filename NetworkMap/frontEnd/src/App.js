import React, {Component} from "react";
import Home from "./component/Home";
import Login from './component/Login';
import Nav from './component/Nav';
import Footer from './component/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Nav />
              <Home/>
              <Footer/>
            </Route>
            <Route path="/Login">
              <Login/>
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
