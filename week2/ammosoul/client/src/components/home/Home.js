import React from "react";
import Flavors from "./Flavors.js";
import Left from "../columnleft/column-left.js";
import Right from "../columnright/column-right.js";
import "./home.css";


function Home() {
  return (
    <div className="container">
      <Left/>
       
      <div className="column-center">
        <Flavors />
      </div>

      <Right/>
    </div>
  );
}

export default Home;
