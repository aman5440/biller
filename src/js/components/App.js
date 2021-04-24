import React, { Component } from "react";
import LayoutComponent from "./layout/layout.component";
import Routes from "./router/router.component";


class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div>
      <Routes />
      </div>
    );
  }
}

export default App;