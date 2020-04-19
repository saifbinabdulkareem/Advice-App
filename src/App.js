import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
        console.log(response.data.slip.advice);
      })
      .catch((error) => console.error(error));
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.fetchApi}>
              <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
