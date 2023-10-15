import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { UseAuthContext} from "../contexts/context";

const Nav = () => {
  const handleLogout = async () => {
    localStorage.clear()
    alert("Log out successfully")
  }
  const auth = localStorage.getItem("user")
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
          <Link onClick={handleLogout} to={"/register"} className={`${auth ? 'inline-block' : 'hidden'}`} >
              Log out
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
