import { useMutation, gql } from "@apollo/client";
import React from "react";

const UserForm = (props) => {
  const [usersignup] = useMutation(CREATE_USER);
  console.log(props);

  let firstname, lastname, email, password, phonenumber;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        usersignup({
          variables: {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            password: password.value,
            phonenumber: phonenumber.value,
          },
        });
      }}
    >
      <h2>sign up form</h2>
      <label class="form-label">first name</label>
      <input ref={(value) => (firstname = value)} id="firstname" />
      <br></br>
      last name
      <input ref={(value) => (lastname = value)} id="lastname" />
      <br></br>
      email
      <input ref={(value) => (email = value)} id="email" />
      <br></br>
      password
      <input ref={(value) => (password = value)} id="password" />
      <br></br>
      phone number
      <input ref={(value) => (phonenumber = value)} id="phonenumber" />
      <br></br>
      <button className="btn btn-success" type="submit">
        Add new user
      </button>
    </form>
  );
};

const CREATE_USER = gql`
  mutation usersignup(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $phonenumber: String!
  ) {
    usersignup(
      input: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
        phonenumber: $phonenumber
      }
    ) {
      firstname
      lastname
      email
      password
    }
  }
`;

export default UserForm;

// usersignup
