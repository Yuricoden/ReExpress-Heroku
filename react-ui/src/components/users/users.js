import React, { Component } from "react";
import Loader from "react-loader";
import "./users.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loaded: false
    };
  }
  componentDidMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(users =>
        this.setState(
          { users: users, loaded: true },
          console.log("users fetched...", users)
        )
      );
  }
  render() {
    return (
      <Loader loaded={this.state.loaded}>
        <div>
          <h1>Users Below Are From A MongoDB Database</h1>
          <ul>
            {this.state.users.map(user => (
              <li key={user._id}>
                {user.email} {user.username}
              </li>
            ))}
          </ul>
        </div>
      </Loader>
    );
  }
}

export default Users;
