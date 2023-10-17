import React, { useEffect, useState } from "react";
import { UseAuthContext } from "../contexts/context";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  console.log(products);
  return (
    <div className="page">
      <h1 className="title">Products List</h1>
      <div className="products-list">
        <ul>
          <li>No.</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Company</li>
        </ul>
        {products.map((item, index) => {
          return <ul>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
          </ul>;
        })}
      </div>
    </div>
  );
};

export default Products;
