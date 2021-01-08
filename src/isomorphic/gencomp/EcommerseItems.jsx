import React from "react";
import ".//../Styles/Ecommerce.scss";
function EcommerseItems() {
  return (
    <div className="main-ecommerce">
      <div className="left-items">
        <p>search here</p>
        <p>start speaking</p>
        <div>
          <p>multi range</p>

          <div className="price">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <p>$10</p>
          </div>
          <div className="price">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <p>$10</p>
          </div>
          <div className="price">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <p>$10</p>
          </div>
          <div className="price">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <p>$10</p>
          </div>

          <div className="price">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            
          </div>
          <p>All</p>

            <div class="slidecontainer">
              <input type="range" min="1" max="100" value="50" />
            </div>

            <p>Category </p>
            <div className="price">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <p>$10</p>
          </div>
          <div className="price">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <p>$10</p>
          </div>
          <div className="price">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <p>$10</p>
          </div>
        </div>
      </div>
      <div className="right-items">
        <p>right hand</p>
      </div>
    </div>
  );
}

export default EcommerseItems;
