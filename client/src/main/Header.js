import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
          <div className="nav">
              <Link to="/">Home </Link>
              <Link to="/add"> Add Giftee</Link>
              <Link to="/see"> See added giftees </Link>
          </div>
      )
}

export default Header;
