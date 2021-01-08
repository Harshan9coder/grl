import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import girl from "./../../media/girl.jpg"

import EcommerseItems from '../../gencomp/EcommerseItems'

import {  
  faBars,
  faSearch,
  faBell,
  
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import Leftnavmenus from "../../gencomp/Leftnavmenus";
import { rewriteURIForGET } from "@apollo/client";

function Ecommerce() {



  let fonticons=[
    {className:"fn", icon:faSearch},
    {className:"fn", icon:faBell},
    {className:"fn", icon:faBars},
    {className:"fn", icon:faCartPlus}
  ]

  return (
    <div className="dashbord">
      <div className="side-nav">
        <div>
          <p className="nav-headline">isomorphic</p>
        </div>

       <Leftnavmenus/> 
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
                     return <FontAwesomeIcon className={i.className} icon={i.icon} />
                   })
                   
                 }

                  <FontAwesomeIcon className="fn" icon={faCartPlus} />
                  <img className="girl fn" src={girl} alt="fireSpot" />
                </div>
              </div>
            </div>
          
<EcommerseItems/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
