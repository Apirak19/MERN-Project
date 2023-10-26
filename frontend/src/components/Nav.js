import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Products from "./Products";
import AddProduct from "./AddProduct";
import PrivateComponent from "./PrivateComponent";

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
    <nav className={`nav`}>
      <div className="logo-btn">
        <span className="logo">o</span>
      </div>
      <div className="menu-btn h-20 inline-block fixed right-0">
        <span className="menu" onClick={(e)=>setNavHidden(!navHidden)}>Menu</span>
      </div>
      {auth ? (
        <ul className={`${navHidden? 'navbar-hide' : 'navbar' }`}>
          <li>
            <Link to="/">
              <div className="navlist">
                <div className="icon">o</div>
                <p className="flex justify-center items-center">Products</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/add">
              <div className="navlist">
                <div className="icon">o</div>
                <p className="flex justify-center items-center">Add Product</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/edit">
              <div className="navlist">
                <div className="icon">o</div>
                <p className="flex justify-center items-center">Edit Product</p>
              </div>
            </Link>
          </li>
          <li onClick={handleLogout}>
              <div className="navlist">
                <div className="icon">o</div>
                <p className="flex justify-center items-center">Logout</p>
              </div>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/login">
              <div className="navlist">
                <div className="icon">o</div>
                <p className="flex justify-center items-center">Login</p>
              </div>
            </Link>
            </li>
            <li>
            <Link to="/register">
              <div className="navlist">
                <div className="icon">o</div>
                <p className="flex justify-center items-center">Sign up</p>
              </div>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
