import React from "react";
import { UseAuthContext } from "../contexts/context";

const Products = () => {
  const { name, email } = UseAuthContext();

  return (
    <div>
      <h1>Hello, {name}</h1>
      <h4>Email: {email}</h4>
    </div>
  );
};

export default Products;
