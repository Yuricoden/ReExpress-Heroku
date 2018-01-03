import React, { Component } from "react";
import logo from "./logo.svg";
import Loader from "react-loader";
import "./App.css";
import Users from "./components/users/users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      loaded: false
    };
  }

  componentDidMount() {
    fetch("/api")
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false,
          loaded: true
        });
      })
      .catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false,
          loaded: true
        });
      });
  }

  render() {
    return (
      <Loader loaded={this.state.loaded}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            {"This is "}
            <a href="https://github.com/dotBerry245/ReExpress-Heroku">
              {"create-react-app with a custom Node/Express server"}
            </a>
            <br />
          </p>
          <p className="App-intro">
            {this.state.fetching
              ? "Fetching message from API"
              : this.state.message}
          </p>
          <Users />
        </div>
      </Loader>
    );
  }
}

export default App;
