import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  }, []);

  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/");
  }

  return (
    <>
      <div class="card mb-3" id='cardlogin'>
        <div class="row" >
          <div class="col-md-6">
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20190730/pngtree-hand-drawn-blue-geometric-architectural-city-background-image_109426.jpg" Width="100%" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <div className="" id="Body">
                <div className="d-flex flex-column justify-content-center m-5">
                  <h2>Login</h2>
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
                  <br />
                  <button className="btn btn-primary" onClick={login}>
                    {" "}
                    Login{" "}
                  </button>
                  <br />
                  <Link to="register">Registration</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
