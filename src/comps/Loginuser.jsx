import React from "react";
// import { gql, userQuery } from "@apollo/client";
// let phonenumber;

function Loginuser(props) {
  // const { loading, error, data } = userQuery(LOG_USER,{})
  
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
       
      }}
    >
      <h2>log in form</h2>
    
      {/* <label class="form-label">enter phone number</label>
      <input ref={(value) => (phonenumber = value)} id="phonenumber" />
      <br></br> */}

      <button className="btn btn-success" type="submit">
        Log in
      </button>
    </form>
  );
}
// const LOG_USER = gql`
//   mutation login($phonenumber: String!) {
//     login(phonenumber: $phonenumber) {
//       firstname
//       lastname
//       email
//       createdAt
//       updatedAt
//     }
//   }
// `;
export default Loginuser;
