import { useState, useEffect } from "react";
import React from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function Dummy() {
  let history = useHistory();
  
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const { id } = useParams();

  const oninputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const onSubmitEvent = async (e) => {
  //   e.preventDefault();
  //   await Axios.put(`http://localhost:3001/users/${id}`,user);
  //   history.push("/crud");
  // };

  const onSubmitEvent = async (e) => {
    e.preventDefault();
    console.log(user.value);
    if (user.value === "") {
      alert("??");
    } else {
      e.preventDefault();
      await Axios.put(`http://localhost:3001/users/${id}`, user);
      history.push("/crud");
    }
  };

  useEffect(() => {
    loadDate();
  }, []);

  const loadDate = async () => {
    const result = await Axios.get("http://localhost:3001/users/" + id);
    setUser(result.data);
  };



  return (
    <form onSubmit={(e) => onSubmitEvent(e)}>
      <div class="form-group">
        <label>Edit your Name</label>
        <input
          type="text"
          name="name"
          value={name}
          class="form-control"
          placeholder="Enter name"
          onChange={(e) => oninputChange(e)}
        />
      </div>

      <div class="form-group">
        <label>Edit your UserName</label>
        <input
          type="text"
          name="username"
          value={username}
          class="form-control"
          placeholder="Enter Username"
          onChange={(e) => oninputChange(e)}
        />
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="text"
          name="email"
          value={email}
          class="form-control"
          placeholder="Enter Email"
          onChange={(e) => oninputChange(e)}
        />
      </div>

      <div class="form-group">
        <label>phone Number</label>
        <input
          name="phone"
          value={phone}
          type="text"
          class="form-control"
          placeholder="Enter Username"
          onChange={(e) => oninputChange(e)}
        />
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Website Nmae</label>
        <input
          type="email"
          value={website}
          name="website"
          class="form-control"
          placeholder="Enter website"
          onChange={(e) => oninputChange(e)}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Dummy;
