import { Component } from "react";
import React from "react";
import "./App.css";
import CardsContainer from "./components/cardsContainer/index";
import data from "./components/data";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CardsContainer users={data} />
      </React.Fragment>
    );
  }
}

export default App;
