import React from "react";
import { flavorItems } from "../../data";



const Flavor = () => {
  return (
    
    <div className="product">
       
      {flavorItems.map((item) => (
        <div className="imgContainer">
          <div className="title">{item.title}</div>
          <img src={item.img} alt="flavorimage" className="img"/>
          <div className="desc">{item.desc}</div>
          <button className ="button">
            <a href={item.$ref} className="button">buy now</a> 
          </button>
        </div>
      ))}
    </div>
  );
};

export default Flavor;
