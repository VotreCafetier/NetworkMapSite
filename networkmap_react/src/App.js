import React, {Component} from "react";
import Home from "./component/Home";
import Login from './component/Login';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Login">
              <Login/>
            </Route>
          </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
