import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [screen, setScreen] = useState(window.innerWidth);
  const [buttonHidden, setButtonHidden] = useState(true);
  const [navHidden, setNavHidden] = useState(true);
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const handleLogout = async () => {
    localStorage.clear();
    alert("Log out successfully");
    navigate("/login");
  };
  window.addEventListener("resize", () => {
    setScreen(window.innerWidth);
  });
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);
  return (
    <nav className="navbar bg-yellow-600">
      {auth && screen <= 821 && (
        <div className="flex justify-center fixed w-screen bg-blue-400">
          <button
            onClick={() => {
              setNavHidden(!navHidden);
              setButtonHidden(!buttonHidden)
            }}
            className={`fixed left-0 top-0 ${buttonHidden ? '' : 'hidden'}`}
          >
            Menu
          </button>
          <div
            className={`bg-blue-600 ${navHidden ? "absolute " : "flex flex-col justify-between"}`}
          >
            <button className={`absolute right-0 ${buttonHidden ? 'hidden' : ''}`} onClick={() => {
              setButtonHidden(!buttonHidden)
            }}>X</button>
            <div className="nav-logo bg-blue-600 text-white rounded-full m-3 px-5 py-2">
              <h1 className="logo font-bold ">{screen}</h1>
            </div>
            <ul className="nav-ul flex flex-col absolute item-center justify-center bg-purple-500">
              <li>
                <Link to={"/"}>Product</Link>
              </li>
              <li>
                <Link to={"/add"}>Add Product</Link>
              </li>
              <li>
                <Link to={"/edit"}>Edit Product</Link>
              </li>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"/login"} onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {auth && screen > 821 && (
        <div className="nav-body flex justify-between ">
          <div className="nav-logo bg-blue-600 text-white rounded-full m-3 px-5 py-2">
            <h1 className="logo font-bold ">{screen}</h1>
          </div>
          <ul className="nav-ul flex justify-center">
            <li>
              <Link to={"/"}>Product</Link>
            </li>
            <li>
              <Link to={"/add"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/edit"}>Edit Product</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/login"} onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
      {!auth && screen <= 821 && (
        <>
          <div className={`nav-body  ${navHidden ? "hidden" : "flex justify-between"}`}>
            <div className="bg-blue-600 text-white rounded-full m-3 px-5 py-2 transform transition-all duration-100 ease-in hover:scale-110">
              <h1 className="logo font-bold ">{screen}</h1>
            </div>
            <ul className="nav-ul flex justify-end">
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Signup</Link>
              </li>
            </ul>
          </div>
        </>
      )}
      {!auth && screen > 821 && (
        <div className="flex justify-between">
          <div className="bg-blue-600 text-white rounded-full m-3 px-5 py-2 transform transition-all duration-100 ease-in hover:scale-110">
            <h1 className="logo font-bold ">{screen}</h1>
          </div>
          <ul className="nav-ul flex justify-end">
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Signup</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
