import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import girl from "./../../media/girl.jpg";

import {
  faBars,
  faSearch,
  faBell,
  faChartPie,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import IncomeCard from "../../gencomp/IncomeCard";
import Leftnavmenus from "../../gencomp/Leftnavmenus";

let fonticons = [
  { className: "fn", icon: faSearch },
  { className: "fn", icon: faBell },
  { className: "fn", icon: faBars },
  { className: "fn", icon: faCartPlus },
];
let card = [];



function Dashboard() {
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
                  {fonticons.map((i) => {
                    <FontAwesomeIcon className={i.className} icon={i.icon} />;
                  })}

                  <FontAwesomeIcon className="fn" icon={faSearch} />

                  <img className="girl fn" src={girl} alt="fireSpot" />
                </div>
              </div>
            </div>
          </div>

          <div className="income-cards displays">
      {
        
Array.apply(null, { length: 4 }).map((e, i) => (
  <IncomeCard className="busterCards" key={i}/>
    
  
))

      }      

{/* 
            <IncomeCard />
            <IncomeCard />
            <IncomeCard />
            <IncomeCard /> */}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
