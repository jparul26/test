import React, { Component }from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import Navbar from "./components/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Homepage from "./components/Homepage/Homepage"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
         <Navbar />
         <Route exact path="/homepage" component={Homepage} />
         <Route exact path="/" component={Homepage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
      </div>
      
      </Router>
      </Provider>
    );
  }
}

export default App;
