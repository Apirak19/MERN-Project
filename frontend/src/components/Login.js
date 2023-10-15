import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "../contexts/context";

const Login = () => {
  const auth = localStorage.getItem("user");
  const {setEmail, email, setPassword, password } =
    UseAuthContext();
  const navigate = useNavigate();
  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.JSON()
    localStorage.setItem("user")
  }
  

  return (
    <div className="min-h-screen">
      <form className="flex flex-col justify-center items-center rounded-xl">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <input
          className="input-box"
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="button"
          onClick={()=>{}}
          className="bg-slate-200 px-4 py-2 m-2 rounded-xl"
        >
          Login
        </button>
        <h4>Don't have an account?</h4>
        <h4 className="transition-transform transform hover:scale-105 font-bold text-orange-500">
          <a href="/register">Sign up</a>
        </h4>
      </form>
    </div>
  );
};

export default Login;
