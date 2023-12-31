import React, { useState, createContext, useContext } from "react";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true)

  const handleLogout = async () => {
    alert("log out successfully");
    localStorage.clear();
  };

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      setData(result);
      localStorage.setItem("user", JSON.stringify(result));
    } else {
      alert("Enter correct account email or password");
    }
  };

  const authContextValue = {
    hidden,
    setHidden,
    data,
    setData,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    setLoading,
    handleLogout,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
const UseAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthContextProvider, UseAuthContext };
