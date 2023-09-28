import React from "react";
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul flex justify-center shadow-xl">
        <li><Link to={"/"}> Products </Link></li>
        <li><Link to={"/add"}> Add Product </Link></li>
        <li><Link to={"/edit"}> Edit Product </Link></li>
        <li><Link to={"/profile"}> Profile </Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/logout"}> Log out </Link></li>
      </ul>
    </div>
  );
};

export default Nav;
