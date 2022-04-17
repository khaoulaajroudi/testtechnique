import React from "react";
import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../JS/Actions/Users";
import { useNavigate } from "react-router-dom";

function Login() {
  const [tab, settab] = useState(0);
  const [name, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="form">
        <div className="social">
          <button className={tab == 1 ? "active" : "go"} onClick={() => settab(0)}>
            Login
          </button>
          <button className="fb" onClick={() => settab(1)}>
            Register
          </button>
        </div>
        {tab == 0 ? (
          <>
            <h3>Login Here</h3>
            <input type="text" placeholder="Email" id="email"  onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}/>
            <button  onClick={(e) => {
                e.preventDefault();
                dispatch(loginUser({ email, password }, navigate));
              }}>LogIn</button>
          </>
        ) : (
          <>
            <h3>Register Here</h3>
            <input type="text" placeholder="Name" id="name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Last Name" id="lastname"  onChange={(e) => setlastName(e.target.value)}/>
            <input type="text" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={(e) => {
                e.preventDefault();
                dispatch(
                  registerUser({ name, lastname, email, password }, navigate)
                );
              }}>Register</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
