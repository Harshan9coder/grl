import React from "react";
import girl from "./../media/girl.jpg";
function Girldetailcard() {
  return (
    <div className="girl-card">
       <img className="girlimg" src={girl} alt="fireSpot" />
      <p className="name">Jhon Doe</p>

      <p>Sr. iOS Developer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
        tempor ammet dolar consectetur adipisicing elit
      </p>
    </div>
  );
}

export default Girldetailcard;
