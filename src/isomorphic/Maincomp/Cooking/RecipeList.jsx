import React ,{useContext} from "react";
import Buttons from "../../gencomp/Button";
import { RecipeContext } from "./MainRecipe";
import Recipe from "./Recipe";



function RecipeList(props) {
  const {handelRecipeAdd} = useContext(RecipeContext)
  const { recipes} = props;
  return (
      <>
    <div>
      {recipes.map((res) => {
        return <Recipe  key={res.id} {...res} />;
      })}
    </div>
      <div>
          <Buttons handelRecipeAdd={handelRecipeAdd} className="btn btn-primary" name="Add new recipe"/>
          {/* <button onClick={handelRecipeAdd}> add recipe</button> */}
      </div>
      </>
  );
}

export default RecipeList;
