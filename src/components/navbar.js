import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="logo">Document Organizer</h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            {/* <li>
              <a href="/">Profile</a>
            </li> */}
            {/* <li>
              <a href="/">Log Out</a>
            </li> */}
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span />
        </label>
      </div>
    );
  }
}

export default NavBar;
