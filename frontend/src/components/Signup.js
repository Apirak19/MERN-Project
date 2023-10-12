import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "../contexts/context";

const Signup = () => {
  const auth = localStorage.getItem("user");
  const { setEmail, email, setPassword, password, data, setData } =
    UseAuthContext();
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  const collectData = async () => {
    if (name && email && password) {
      let data = await fetch("http://localhost:5000/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let result = await data.json();
      setData(result);
      localStorage.setItem("user", JSON.stringify(result));
      // alert("collected data:", name, email, password);
      // alert("result: ", JSON.stringify(result));
      navigate("/");
    } else {
      alert("fill all")
    }
  };
  return (
    <div>
      <form className="flex flex-col justify-center items-center rounded-xl">
        <h1 className="text-2xl font-bold mb-2">Register</h1>
        <input
          className="input-box"
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
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
          onClick={collectData}
          className="bg-slate-200 px-4 py-2 m-2 rounded-xl"
        >
          Sign up
        </button>
        <h4>Already have an account?</h4>
        <h4 className="transition-transform transform hover:scale-105 font-bold text-orange-500">
          <a href="/login">Login</a>
        </h4>
      </form>
      <h1>This is the information</h1>
    </div>
  );
};

export default Signup;
