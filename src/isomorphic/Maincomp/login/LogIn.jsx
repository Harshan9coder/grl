import React, { useState } from "react";
import mainimg from ".//../../media/student.jpg";
import ".//../../Styles/homestyle.scss";
import Buttons from "../../gencomp/Button";
import Inputsboxs from "../../gencomp/Inputsboxs";

import { useHistory } from "react-router-dom";
import Flashmess from "../../gencomp/Flashmess";

function LogIn() {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [mess, setmess] = useState(false);
  const [usernameerr, setUsernameerr] = useState({});
  const [passworderr, setpassworderr] = useState({});
  const btn = [
    { name: "Sign up with facebook", className: "fb" },
    { name: "Sign up with Google", className: "gp" },
    { name: "Sign up with auth", className: "ah" },
    { name: "Sign up with Firebase", className: "fr" },
  ];
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    const isValid = formValidation();

    if (isValid) {
      setUsername("");
      setpassword("");

      function myFunction() {
        setTimeout(function () {
          history.push("/dashboard");
        }, 5000);
      }
      myFunction();
      setmess(true);
    }
  };

  const formValidation = () => {
    const usernameerr = {};
    const passworderr = {};
    let isValid = true;
    console.log(username);

    if (username === "") {
      usernameerr.usernamereq = "emali required";
      isValid = false;
    } else if (username.trim().length <= 5) {
      usernameerr.usernameshort = "email is too short";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(username)) {
      usernameerr.emailerror = "Invalid email address";
    }

    if (password.trim().length < 1) {
      passworderr.passwordnull = "password required";
      isValid = false;
    } else if (!password.includes("123")) {
      passworderr.passwordcheck = "password must has number";
      isValid = false;
    }
    setUsernameerr(usernameerr);
    setpassworderr(passworderr);
    return isValid;
  };
  return (
    <div>
      {mess && <Flashmess setmess={setmess} />}

      <div className="home-sec">
        <div className="image-home">
          <img src={mainimg} alt="fireSpot" />
        </div>
        <div className="login-side">
          <form onSubmit={onSubmit}>
            <div class="mb-3">
              <h2 className="headline">ISOMORPHIC</h2>
              <Inputsboxs
                placeholder="email"
                id="username"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <br />

            {Object.keys(usernameerr).map((key) => {
              return <div style={{ color: "red" }}> {usernameerr[key]}</div>;
            })}

            <div class="mb-3">
              <Inputsboxs
                placeholder="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            {Object.keys(passworderr).map((key) => {
              return <div style={{ color: "red" }}> {passworderr[key]}</div>;
            })}
            <div className="check-sec">
              <div class="mb-3 form-check">
                <Inputsboxs type="checkbox" className="inputs" />

                <label class="form-check-label Remember" for="exampleCheck1">
                  Remember me
                </label>
              </div>

              <Buttons className="signupbtn" name="Submit" />
            </div>
            <p className="hint">
              <span>* &nbsp; </span> username: demo password: demodemo or just
              click on any button.
            </p>
          </form>
          <hr className="hr-ln"></hr>
          <div className="all-btns">
            {btn.map((b) => {
              return <Buttons name={b.name} className={b.className}/>;
            })}
          </div>
          <p className="for-got">Forgot password</p>
          <p>
            <p className="create">Create an Isomorphoic account</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
