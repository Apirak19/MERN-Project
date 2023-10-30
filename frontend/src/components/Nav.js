import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Products from "./Products";
import AddProduct from "./AddProduct";
import PrivateComponent from "./PrivateComponent";
import { Button, Grid, Typography } from "@mui/material";
import { shadows } from "@mui/system";

const Nav = () => {
  const [buttonHidden, setButtonHidden] = useState(true);
  const [navHidden, setNavHidden] = useState(true);
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
    // <nav className={`${auth ? "nav" : "hidden"}`}>
    //   <div className="logo-btn">
    //     <span className="logo">o</span>
    //   </div>
    //   <div className="menu-btn h-20 inline-block fixed right-0">
    //     <span className="menu" onClick={(e) => setNavHidden(!navHidden)}>
    //       Menu
    //     </span>
    //   </div>
    //   {auth ? (
    //     <ul className={`navbar ${navHidden ? "navbar-hide" : ""}`}>
    //       <li>

    //       </li>
    //       <li>

    //       </li>
    //       <li>

    //       </li>
    //       <li onClick={handleLogout} className="cursor-pointer">
    //         <div className="navlist">
    //           <div className="icon">o</div>
    //           <p className="flex justify-center items-center">Logout</p>
    //         </div>
    //       </li>
    //     </ul>
    //   ) : (
    //     <ul className="">
    //       <li>
    //         <Link to="/login">
    //           <div className="navlist">
    //             <div className="icon">o</div>
    //             <p className="flex justify-center items-center">Login</p>
    //           </div>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/register">
    //           <div className="navlist">
    //             <div className="icon">o</div>
    //             <p className="flex justify-center items-center">Sign up</p>
    //           </div>
    //         </Link>
    //         </li>
    //         <p>test</p>
    //     </ul>
    //   )}
    // </nav>
    <Grid
      className=""
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{backgroundColor: "gray", padding: "10px 0"}}
    >
      <Grid item xs={1} md={3}>
        <Typography variant="h1" textAlign={"center"}>
          Logo
        </Typography>
      </Grid>
      {auth ? (
        <Grid item xs={1} md={9} textAlign={"center"}>
          <Button variant="contained" sx={{ margin: "10px" }}>
            <Link to="/">
              <div className="navlist">
                <p>Products</p>
              </div>
            </Link>
          </Button>
          <Button variant="contained" sx={{ margin: "10px" }}>
            <Link to="/edit">
              <div className="navlist">
                <p>Edit Product</p>
              </div>
            </Link>
          </Button>
          <Button variant="contained"  sx={{ margin: "10px" }}>
            <Link to="/add">
              <div className="navlist">
                <p>Add Product</p>
              </div>
            </Link>
          </Button>
          <Button variant="contained" sx={{ margin: "10px"}} onClick={handleLogout}>
            Logout
          </Button>
        </Grid>
      ) : (
        <Grid
          item
          xs={1}
          md={9}
          textAlign={"end"}
          sx={{ paddingRight: "100px" }}
        >
          <Button variant="contained" sx={{ margin: "10px", width: "100px" }}>
            <Link to="/login">
              <div className="navlist">
                <p>Login</p>
              </div>
            </Link>
          </Button>
          <Button variant="contained" sx={{ margin: "10px", width: "100px" }}>
            <Link to="/register">
              <div className="navlist">
                <p className="flex justify-center items-center">Register</p>
              </div>
            </Link>
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Nav;
