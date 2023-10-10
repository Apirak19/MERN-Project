import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    setData(result);
    console.log(result);
  };
  return (
    <div>
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
          onClick={handleLogin}
          className="bg-slate-200 px-4 py-2 m-2 rounded-xl"
        >
          Login
        </button>
        <h4>Don't have an account?</h4>
        <h4 className="transition-transform transform hover:scale-105 font-bold text-orange-500">
          <a href="/register">Sign up</a>
        </h4>
      </form>
      <h1>This is the information</h1>
      <h4>{data ? JSON.stringify(data) : 'Nothing recieved'}</h4>
    </div>
  );
};

export default Login;
