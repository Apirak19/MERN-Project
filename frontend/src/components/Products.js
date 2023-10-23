import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete"
    })
    result = await result.json()
    if (result) {
      alert("record was deleted")
      getProducts()
    }
  }
  return (
    <div className="page">
      <h1 className="title">Products List</h1>
      <div className="products-list">
        <ul>
          <li>No.</li>
          <li>ID</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Company</li>
          <li>operation</li>
        </ul>
        {products.map((item, index) => {
          return (
            <ul key={item.name}>
              <li>{index + 1}</li>
              <li>{item._id}</li>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.category}</li>
              <li>{item.company}</li>
              <li>
                <button className="productDel" onClick={() => {
                  deleteProduct(item._id)
                }}>
                  delete
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
