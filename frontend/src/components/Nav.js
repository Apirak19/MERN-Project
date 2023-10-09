import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem('user')
  const logout = () => {
    alert("log out successfully");
    localStorage.clear()
  };
  return (
    <div>
      <ul className="nav-ul flex justify-center shadow-xl">
        <li>
          <Link to={"/"}> Products </Link>
        </li>
        <li>
          <Link to={"/add"}> Add Product </Link>
        </li>
        <li>
          <Link to={"/edit"}> Edit Product </Link>
        </li>
        <li>
          <Link to={"/profile"}> Profile </Link>
        </li>
        <li>
          {auth ? (
            <Link onClick={logout} to={"/register"}>
              Log out
            </Link>
          ) : ""}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
