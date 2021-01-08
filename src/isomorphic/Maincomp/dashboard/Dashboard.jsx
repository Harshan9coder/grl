import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cards from "../../gencomp/Cards";
import girl from "./../../media/girl.jpg";

import graph1 from "./../../media/graph1.png";
import graph2 from "./../../media/graph2.png";

import graph31 from "./../../media/graph31.png";
import graph32 from "./../../media/graph32.png";

import Tables from ".//../../gencomp/Tables";

import {
  faEnvelope,
  faComments,
  faBars,
  faSearch,
  faBell,
  faChartPie,
  faCartPlus,
  faCamera,
  faShoppingBasket,
  faMusic,
  faTrophy,
  faDownload,
  faFileUpload,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import IncomeCard from "../../gencomp/IncomeCard";
import Graphcards from "../../gencomp/Graphcards";
import Results from "../../gencomp/Results";
import Graphimage from "../../gencomp/Graphimage";
import Girldetailcard from "../../gencomp/Girldetailcard";
import Leftnavmenus from "../../gencomp/Leftnavmenus";

const faclist = [
  { className: "fn", icon: faSearch },
  { className: "fn", icon: faBell },
  { className: "fn", icon: faChartPie },
  { className: "fn", icon: faCheck },
];

const graphcart = [
  { ic: faComments, clr: "chat" },
  { ic: faMusic, clr: "music" },
  { ic: faTrophy, clr: "tropy" },
];

const card = [
  { color: "card-cb", ic: faCamera, iconfont: "ico" },
  { color: "card-cg", ic: faCartPlus },
  { color: "card-cp", ic: faShoppingBasket },
];

const results = [
  { ic: faDownload, text: "Download", clr: "chat1" },
  { ic: faChartPie, text: "Support", clr: "music1" },
  { ic: faFileUpload, text: "Upload", clr: "tropy1" },
];

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
                  {faclist.map((i) => {
                    return (
                      <FontAwesomeIcon className={i.className} icon={i.icon} />
                    );
                  })}
                  <img className="girl fn" src={girl} alt="fireSpot" />
                </div>
              </div>
            </div>
          </div>

          <Tables />

          <div className="card-items">
            <Cards color="card-cv" ic={faEnvelope} iconfont="ico" />
            {card.map((i) => {
              return <Cards color={i.color} ic={i.ic} />;
            })}
          </div>
          <div className="income-cards">

            {Array.apply(null, { length: 4 }).map((e, i) => (
              <IncomeCard key={i} />
            ))}



          </div>
          <div className="card-groups">
            <div className="graph-cards1">
              {graphcart.map((i) => {
                return <Graphcards ic={i.ic} clr={i.clr} />;
              })}
            </div>
            <div className="graph-cards2">
              {results.map((i) => {
                return <Results ic={i.ic} text={i.text} clr={i.clr} />;
              })}             
            </div>

            <div className="graph-cards3">
              <Graphimage ic={faComments} />
            </div>
          </div>
          <div className="two-graphs">
            <div className="graph-item1">
              <img className="graphimg" src={graph1} alt="fireSpot" />
            </div>
            <div className="graph-item2">
              <img className="graphimg" src={graph2} alt="fireSpot" />
            </div>
          </div>

          <div className="final-graph">
            <div className="thiredgraph1">
              <Girldetailcard />
            </div>
            <div className="thiredgraph2">
              <img src={graph31} alt="fireSpot" />
            </div>
            <div className="thiredgraph3">
              <img src={graph32} alt="fireSpot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
