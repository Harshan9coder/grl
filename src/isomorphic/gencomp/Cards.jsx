import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Cards(props) {
  console.log(props);
  return (
    <div className="cards">
      <div className={`card ${props.color}`}>
        <div>
          <FontAwesomeIcon className="fa" icon={props.ic}/>
        </div>
        <div className="card-text">
          <p className="card-name">201</p>
          <p className="card-name">unread</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
