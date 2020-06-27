import React from "react";

class AllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/boastsandroasts/")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  upvote = (id) => {
    fetch(`http://127.0.0.1:8000/api/boastsandroasts/${id}/upvote/`, {
      method:"POST"
    })
      .then(() => window.location.reload());
  };

  downvote = (id) => {
    fetch(`http://127.0.0.1:8000/api/boastsandroasts/${id}/downvote/`, {
      method:"POST"
    })
      .then(() => window.location.reload());
  };

  render() {
    return (
      <>
        <ul>
          {this.state.posts.map((post) => {
            return (
              <>
                <li>{post.content}</li>
                <li>Votescore: {post.votescore}</li>
                <li>
                  {post.upvotes} <button onClick={() => this.upvote(post.id)}>Upvote</button>
                </li>
                <li>
                  {post.downvotes} <button onClick={() => this.downvote(post.id)}>Downvote</button>
                </li>
                <li>{post.date}</li>
                <br />
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

export default AllPosts;
