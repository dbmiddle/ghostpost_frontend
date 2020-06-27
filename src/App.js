import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Boasts from "./components/Boasts";
import Roasts from "./components/Roasts";
import Popularity from "./components/Popularity";
import SubmitPost from "./components/SubmitPost";

class App extends React.Component {
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/boastsandroasts/")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/boasts" component={Boasts} />
          <Route path="/roasts" component={Roasts} />
          <Route path="/popularity" component={Popularity} />
          <Route path="/submitpost" component={SubmitPost} />
        </Switch>
      </>
    );
  }
}
export default App;
