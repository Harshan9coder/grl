import React, { useContext } from "react";
import Buttons from "../../gencomp/Button";

import ".//css/res.css";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./MainRecipe";

function Recipe(props) {
  const { handelRecipeDelete } = useContext(RecipeContext);
  const { name, servings, cookTime, instuctions, ingredients, id } = props;
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>

      <div className="btn__bt">
        <Buttons className="btn btn-primary" name="Edit" />
        <Buttons
          handelRecipeAdd={() => handelRecipeDelete(id)}
          className="btn btn-danger"
          name="Delete"
        />
      </div>
      <div>
        <span> Cook Time : </span>
        <span> {cookTime} </span>
      </div>
      <div>
        <span> servings : </span>
        <span> {servings} </span>
      </div>
      <div>
        <span>
          {" "}
          <strong>instuctions</strong>{" "}
        </span>
        <div>{instuctions}</div>
      </div>
      <div>
        <span>
          {" "}
          <strong>ingredients</strong>{" "}
        </span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
