import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import { v4 as uuidv4 } from "uuid";

import Recipeedit from "./Recipeedit";
import Getdata from "../Getdata";
export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingwithReact.recipes";
const sampleRecipes = [
  {
    id: 1,
    name: "plain chicken",
    servings: 3,
    cookTime: "1:45",
    instuctions:
      "1.put salt on chicken\n2.add a tittle bit pepper\n3.no more spicy",
    ingredients: [
      { id: 1, name: "chicken", amount: "2 pounds" },
      { id: 2, name: "muttion", amount: "4 pounds" },
    ],
  },
  {
    id: 2,
    name: "plain fish",
    servings: 5,
    cookTime: "3:45",
    instuctions:
      "1.put salt on fish\n2.add a tittle bit pepper\n3.no more spicy\n",
    ingredients: [
      { id: 1, name: "fish", amount: "2 pounds" },
      { id: 2, name: "salmon fish", amount: "4 pounds" },
    ],
  },
];
function MainRecipe() {
  const [recipe, setrecipe] = useState(sampleRecipes);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setrecipe(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipe));
  }, [recipe]);

  const recipeContextvalue = {
    handelRecipeDelete,
    handelRecipeAdd,
  };
  function handelRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "harshan",
      servings: 1,
      cookTime: "1:00",
      instuctions: "instr..",
      ingredients: [{ id: uuidv4(), name: "myname", amount: "1 Tab" }],
    };
    setrecipe([...recipe, newRecipe]);
  }
  function handelRecipeDelete(id) {
    setrecipe(recipe.filter((res) => res.id !== id));
  }
  return (
    <RecipeContext.Provider value={recipeContextvalue}>
      <div className="main-box">
        <RecipeList recipes={recipe} />
        
        <Recipeedit />
      </div>
        <Getdata/>
    </RecipeContext.Provider>
  );
}

export default MainRecipe;
