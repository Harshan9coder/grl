import React from "react";

function Buttons(props) {
  const {
    handelRecipeAdd,
    className,
    name,
    handelRecipeDelete,
    
  } = props;

  return (
    <div>
      <button
        onClick={handelRecipeDelete}
        onClick={handelRecipeAdd}
        className={`btn-social ${className}`}
      >
        {name}
      </button>
    </div>
  );
}

export default Buttons;
