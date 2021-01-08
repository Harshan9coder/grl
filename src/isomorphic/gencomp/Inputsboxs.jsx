import React from "react";

function Inputsboxs(props) {
  
  return (

    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        class="form-control"
        id={props.id}
        name={props.name}
        aria-describedby="emailHelp"
        {...props}
        />
    </div>
  );
}

export default Inputsboxs;
