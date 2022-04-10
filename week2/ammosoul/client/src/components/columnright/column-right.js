import React from "react";
import "../columnleft/column.css";


function Right() {
    return (
        <div className="column-right">
            <button onclick="../menu/SizeMenu.js" className ="shopsize">
                <h4>Shop By Size</h4>
            </button>{"  "}
            <button onclick="../menu/FlavorMenu.js" className ="shopflavor">
                <h4>Shop By Flavor</h4>
            </button>
        </div>
  );
}
export default Right;