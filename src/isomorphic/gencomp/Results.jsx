import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Results(props) {
  return (
    <div className="sc-kGXeez">
      <div className="isoContentWrapper">
        <h3 className="isoStatNumber">
          <span>{props.text}</span>
        </h3>
        <span className="isoLabel">
          <span>New Messages</span>
        </span>
      </div>
      <div className="isoIconWrapper">
        <FontAwesomeIcon className={`fa ${props.clr}`} icon={props.ic} />
      </div>
    </div>
  );
}

export default Results;
