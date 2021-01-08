import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Leftnav(props) {
  return (
    <div>
      <div className="one-menu">
        <FontAwesomeIcon className="fa" icon={props.icon} />
        <p className="nav-menu-text">{props.content}</p>
      </div>
    </div>
  );
}

export default Leftnav;
