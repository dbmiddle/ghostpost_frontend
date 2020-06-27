import React from "react";
import NavBar from "./NavBar";

class SubmitPost extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(event);
    fetch("http://127.0.0.1:8000/api/boastsandroasts/", {
      method: "POST",
      body: data,
    })
    .then(data => console.log(data));
  }

  render() {
    return (
      <>
        <NavBar />
        <h2>Submit a Post</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="is_boast">is_boast</label>
          <input type="checkbox" name="is_boast" />
          <label htmlFor="content">Enter boast or roast</label>
          <input id="content" name="content" type="text" />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default SubmitPost;
