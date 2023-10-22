import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "../contexts/context";

const Login = () => {
  const auth = localStorage.getItem("user");
  const { setEmail, email, setPassword, password, loading, setLoading } =
    UseAuthContext();
  const navigate = useNavigate();
  const handleLogin = async () => {
    setLoading(true);
    try {
      let result = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(true);
      result = await result.json();
      if (result.name) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      }
    } catch (err) {
      alert("please enter correct data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <form className="flex flex-col justify-center items-center rounded-xl">
        <h1 className="title">Login</h1>
        <input
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
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
          {loading ? "Logging in" : "Log in"}
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
