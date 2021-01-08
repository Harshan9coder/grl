// import { gql } from "graphql-tag";
import { gql,useQuery}   from "@apollo/client";
import React from "react";
// import { graphql } from 'react-apollo';
// import { graphql } from "react-apollo"
const querydata = gql`
  {
    userlist {
      firstname
      lastname
      phonenumber
    }
  }
`;

function Login(props) {
  const {loading,error , data}=useQuery(querydata);
  // console.log(props)
  

  if(loading) return <p>loading......</p>
  if(error) return <p>ouch no data at all ...</p>
  return (
    <>
      <h1>list of loged in users</h1>
      {data.userlist.map((user,id)=>(
        <p key={id}>
          {user.firstname}<br></br>
          {user.phonenumber}
          </p>
          
        ))}
    </>
  );
}

export default (Login);
