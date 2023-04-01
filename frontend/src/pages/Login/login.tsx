import React, { useState } from "react";
import { Routes } from "../../constants/user.routes";
import { useNavigate } from "react-router-dom";
import {FaUserLock} from "react-icons/fa"
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    localStorage.setItem(
      "token",
      JSON.stringify({
        email: email,
        password: password,
        token: "asdasdadasdasdaskad1234asd",
      })
    );
    navigate(Routes.DASHBOARD);
    window.location.reload();
  };

  return (
    <div className="login-container">
      <div className="subContainer">
        {/* <div className="images"/> */}
      <form onSubmit={handleSubmit}>
        <FaUserLock style={{backgroundColor:"#20acf7", borderRadius:"10px", color:"white",padding:"10px", width:"30px", height:'30px'}}/> 
        <h1> Login</h1>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>

      </div>
    </div>
  );
}

export default Login;
