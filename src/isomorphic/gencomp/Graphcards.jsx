import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Graphcards(props) {
  return (
    <div className="sc-kGXeez">

      <div className="isoIconWrapper">
      <FontAwesomeIcon className={`fa ${props.clr}`} icon={props.ic}/>
      </div>
      <div className="isoContentWrapper">
        <h3 className="isoStatNumber">
          <span>110{props.download}</span>
        </h3>
        <span className="isoLabel">
          <span>New Messages</span>
        </span>
      </div>

      
    </div>
  );
}

export default Graphcards;
