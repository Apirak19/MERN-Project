import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [hidden, setHidden] = useState(false)
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const handleLogout = async () => {
    localStorage.clear();
    alert("Log out successfully");
    navigate("/login");
  };
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);
  return (
      hidden ? (<button onClick={()=>setHidden(false)}>O</button>)
        : <div className={` ${hidden ? 'nav-hidden': 'nav'} shadow-xl`}>
        <button className="w-3 absolute right-0 flex justify-center" onClick={()=>{setHidden(true)}}>X</button>
        {auth ? (
          <div className="nav-body flex justify-between">
            <div className="nav-logo bg-blue-600 text-white rounded-full m-3 px-5 py-2">
              <h1 className="logo font-bold ">LOGO</h1>
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
        ) : (
          <div className="flex justify-between  ">
            <div className="bg-blue-600 text-white rounded-full m-3 px-5 py-2 transform transition-all duration-100 ease-in hover:scale-110">
              <h1 className="logo font-bold ">LOGO</h1>
            </div>
            <ul className="nav-ul flex justify-end ">
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Signup</Link>
              </li>
            </ul>
          </div>
        )}
</div>
    
  );
};

export default Nav;
