import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/boasts'>Filter by Boasts</Link>
          <Link to='/roasts'>Filter by Roasts</Link>
          <Link to='/popularity'>Filter by Popularity</Link>
          <Link to='/submitpost'>Submit a Boast or Roast</Link>
        </nav>
      </>
    );
  }
}

export default NavBar;
