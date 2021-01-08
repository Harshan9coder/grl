import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
// import "./index.scss";
// import  { onError } from 'apollo-link-error'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import '..//src/isomorphic/Styles/dashbord.scss'
import '..//src/isomorphic/Styles/inbox.scss'

import '..//src/isomorphic/Styles/chatbox.scss';

import reportWebVitals from "./reportWebVitals";

import {
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client";

// import Login from "./comps/Login";
// import Loginuser from "./comps/Loginuser";
// import UserForm from "./comps/UserForm";



const client = new ApolloClient({

  cache: new InMemoryCache(),
  link:new HttpLink({
    uri:"http://localhost:3001/graphql"})
    

 
});
ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <Loginuser/> */}
    {/* <Login /> */}
    {/* <UserForm/> */}
    
    <App />    


  </ApolloProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
