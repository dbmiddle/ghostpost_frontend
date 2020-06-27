import React from 'react';
import NavBar from './NavBar'

class Popularity extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          posts: [],
        };
      }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/boastsandroasts/")
          .then((res) => res.json())
          .then((data) => this.setState({ posts: data.sort((a, b) => {
            let x = b.upvotes - b.downvotes;
            let y = a.upvotes - a.downvotes;
            return x - y; })
        
        }));
          
      }

      render() {
        return (
          <div>
            <NavBar />
            <h1>Most Popular Posts</h1>
        
            <ul className="popular-list">
              {this.state.posts.map((post) => {
                return(
                    <>
                      <li>{post.content}</li>
                      <li>Votescore: {post.votescore}</li>
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

export default Popularity;