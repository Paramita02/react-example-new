import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>
          <Link to="/login/">Login</Link>
        </p>
        <p>
          <Link to="/success" >Success</Link>
        </p>
        
      </div>
    );
  }
}

export default Home;