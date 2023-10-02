import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectData = async () => {
    console.warn(name, email, password);
    const data = await fetch("http://localhost:5000/register", {
      method: 'post',
      body:JSON.stringify({name, email, password})
    })
  }
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
        <button type="button" onClick={collectData} className="bg-slate-200 px-4 py-2 m-2 rounded-xl">
          Sign up
        </button>
      </form>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>
    </div>
  );
};

export default Signup;
