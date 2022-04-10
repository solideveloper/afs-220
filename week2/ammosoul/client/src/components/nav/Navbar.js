import React from "react";
import "./navbar.css";

function Nav() {
  return (
    <div class="navbar">
      <a href="./" className="logo">
        <h1>AmmoSoul</h1>
        <p>Elderberry Infused Sea Moss Gel</p>
      </a>
      <a href="https://www.soli.nyc" className="navitems">FAQ</a>
      <a href="./contact" className="navitems">Orders</a>
      <a href="./menu" className="navitems">Artillery</a>
      
      <div id="announcements">
        Get $10 Off when you buy <span className="sale">12oz BluezBerry</span> this week only!
      </div>
      
    </div>
  );
}

export default Nav;
