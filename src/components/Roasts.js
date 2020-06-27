import React from "react";
import NavBar from "./NavBar";

class Roasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/boastsandroasts/")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data.filter(post => post.is_boast === false) }));
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Roasts</h1>

        <ul className="roast-list">
          {this.state.posts.map((post) => {
            return(
                <>
                  <li>{post.content}</li>
                  <li>{post.date}</li>
                  <br />
                </>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Roasts;