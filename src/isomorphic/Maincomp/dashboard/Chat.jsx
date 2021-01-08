import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import girl from "./../../media/girl.jpg";

import Chatbox from "../../../isomorphic/gencomp/Chatbox";

import {
  faBars,
  faSearch,
  faBell,
  faChartPie,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import Leftnavmenus from "../../gencomp/Leftnavmenus";
const fonticons = [
  { className: "fn", icon: faSearch },
  { className: "fn", icon: faBell },
  { className: "fn", icon: faChartPie },
  { className: "fn", icon: faCartPlus },
];
function Chat() {
  return (
    <div className="dashbord">
      <div className="side-nav">
        <div>
          <p className="nav-headline">isomorphic</p>
        </div>

        <Leftnavmenus />
      </div>
      <div className="exam1">
        <div className="exam">
          <div className="bg-nav">
            <div className="header">
              <div>
                <FontAwesomeIcon className="fn" icon={faBars} />
              </div>

              <div className="right-items">
                <div>
                  {
                    fonticons.map(i=>{
                      return <FontAwesomeIcon className={i.className} icon={i.icon}/>
                    })
                  }                                  
                  <img className="girl fn" src={girl} alt="fireSpot" />
                </div>
              </div>
            </div>
            <Chatbox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
