import React from "react";
import NavBar from "./NavBar";
import AllPosts from "./AllPosts";

class Home extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <h1>GhostPost</h1>
        <AllPosts />
      </>
    );
  }
}
export default Home;
