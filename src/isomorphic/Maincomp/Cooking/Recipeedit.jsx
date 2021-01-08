import React from "react";
import Buttons from "../../gencomp/Button";
import Recipeingredentedit from "./Recipeingredentedit";

function Recipeedit() {
  return (
    <div>
      <div>
        <button cla className="btn btn-danger arrang">&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="Cook time">cookTime</label>
        <input type="text" name="cooktime" id="cooktime" />
        <br />
        <label htmlFor="servings">Servings</label>
        <input min="1" type="text" name="servings" id="servings" />
      </div>

      <div>
        <label htmlFor="instructions">instructions</label><br/>
        <textarea
          name="instructions"
          id="instructions"
          cols="30"
          rows="5"
        />
      </div>
      <div>
          <div><strong>Name</strong></div>
          <div><strong>Amout</strong></div>
          <div>
              <Recipeingredentedit/>
              <Recipeingredentedit/>
              {/* ingredent componet */}
          </div>
          <div>
              <Buttons className="btn-primary" name="Add ingredients"/>
          </div>
      </div>
    </div>
  );
}

export default Recipeedit;
