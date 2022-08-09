import { Component } from 'react'
import Error from "./pages/Error";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * 
 * @param isLogged bool   Check if user is logged
 * 
 */
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged : false
    };
  }

  componentDidMount() {
    // check if there is a user in a cookie

    // ask the db for the token
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="*" element={<Error />} />
              </Route>
          </Routes>
      </BrowserRouter>
    )
  }
}

export default App