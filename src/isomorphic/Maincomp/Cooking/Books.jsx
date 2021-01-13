git 
import React from "react";


const Book=() => {
   return(
    <div>
    <img src="https://images-na.ssl-images-amazon.com/images/I/51rGH1CV5BL._SX384_BO1,204,203,200_.jpg" />
    <p>this is a book</p>
  </div>
   )
}


const Name=(params) => {
    return (
        <div>
            <p>
                harshan
            </p>
        </div>
    )
}

const Title=(params) => {
    return (
        <div>
            <p>
           <strong>
           i love moon and back
               </strong> 
            </p>
        </div>
    )
}
function Books() {
  return (
<div>

    <Book/>
    <Title/>
    <Name/>

</div>


  );
}

export default Books;
