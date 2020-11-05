import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.list = ["a", "b", "c", "d", "e"];
  }
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {this.list.map((relative, index) => (
            <li key={`relativeListItem${index + 1}`}></li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
