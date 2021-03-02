import React, { useState, useEffect } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const history = useHistory();

    useEffect(()=>{
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    }, [])
        
   async function login()
   {
      console.warn(email,password)
      let item={email,password};
      let result = await fetch("http://localhost:8000/api/login", {
          method: 'POST',
          headers:  {
            "Content-Type": "application/json",
            "Accept":'application/json'
          },
          body: JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info",JSON.stringify(result))
      history.push("/add")
   }


    return (
        <>
           <div className="row col-sm-6 offset-sm-3" id="Body" >
                <div className="medium-5 columns left">
                <h4>Login</h4>

                <label>Email</label>
                <input type="text"
                 className="form-control"
                 name="username" 
                 onChange={(e)=> setEmail(e.target.value)}
                 placeholder="email"/>

                <label>Password</label>
                <input
                 type="password"
                 name="password"
                 className="form-control"
                 placeholder="Password"
                 onChange={(e)=> setPassword(e.target.value)}
                />
                <br/>
                <button className="btn btn-primary" onClick={login}> Login </button>
                <br/>
                <a href="/signup">Registration</a>
                </div>
            </div> 
        </>
    )
}

export default Login
