import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "../contexts/context";

const Login = () => {
  const auth = localStorage.getItem("user");
  const { handleLogin, setEmail, email, setPassword, password, data, setData } =
    UseAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);

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
    </div>
  );
};

export default Login;
