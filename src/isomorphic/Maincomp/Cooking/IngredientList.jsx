import React from "react";
import Ingredient from "./Ingredient";

function IngredientList({ ingredients }) {
  const inggreientElement = ingredients.map((ing) => {
    return <Ingredient key={ing.id} {...ing} />;
  });
  return <div>{inggreientElement}</div>;
}
export default IngredientList;
