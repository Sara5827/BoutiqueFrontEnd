import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/register");
    }
  }, []);

  const API_URL = "http://localhost:8000/api/register";
  const register = (name, email, password, password_confirmation) => {
    return axios.post(API_URL + "signup", {
      name,
      email,
      password,
      password_confirmation,
    });
  };

  return (


    <>
      <div class="card mb-3" id='cardlogin'>
        <div class="row" >
          <div class="col-md-6">
            <img src="https://image.freepik.com/vecteurs-libre/fond-ville-nuit-futuriste_52683-8651.jpg" Width="100%" alt="..." />
          </div>
          <div class="col-md-6">
          <div className="row m-5 " id="Body">
        <div className="medium-5 columns left">
          <h2>Register</h2>

          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />

          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Password confirmation</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password confirmation"
            onChange={(e) => setPassword_confirmation(e.target.value)}
          />

          <br />
          <button className="btn btn-primary" onClick={register}>
            {" "}
            Register{" "}
          </button>
          <br />
          <a href="/login">Login</a>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );

}

export default Register;
