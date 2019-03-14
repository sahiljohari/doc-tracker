import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <h1 class="logo">DocTracker</h1>
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <nav>
          <ul>
            <li>
              <a href>Profile</a>
            </li>
            <li>
              <a href>Log Out</a>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span />
        </label>
      </div>
    );
  }
}

export default NavBar;
