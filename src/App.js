import logo from "./logo.svg";
import "./App.css";
import PageLayout from "./components/PageLayout";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageLayout></PageLayout>
      </div>
    );
  }
}

export default App;
