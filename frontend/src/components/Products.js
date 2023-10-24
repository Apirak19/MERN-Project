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
      method: "delete",
    });
    result = await result.json();
    if (result) {
      alert("record was deleted");
      getProducts();
    }
  };
  return (
    <div className="page">
      <h1 className="title">Products List</h1>
      <div className="products-list-lg">
        <ul className="productHead">
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
            <ul className="productData" key={item.name}>
              <li>{index + 1}</li>
              <li>{item._id}</li>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.category}</li>
              <li>{item.company}</li>
              <li>
                <button
                  className="productDel"
                  onClick={() => {
                    deleteProduct(item._id);
                  }}
                >
                  delete
                </button>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="products-list-md">
        {products.map((item, index) => {
          return (
            <div>
              <ul className="productData border-4" key={item.name}>
                <div className="productCell">
                  <li className="tableHead">No.</li>
                  <li className="tableData">{index + 1}</li>
                </div>
                <div className="productCell">
                  <li className="tableHead">ID</li>
                  <li className="tableData">{item._id}</li>
                </div>
                <div className="productCell">
                  <li className="tableHead">Name</li>
                  <li className="tableData">{item.name}</li>
                </div>
                <div className="productCell">
                  <li className="tableHead">Price</li>
                  <li className="tableData">{item.price}</li>
                </div>
                <div className="productCell">
                  <li className="tableHead">Category</li>
                  <li className="tableData">{item.category}</li>
                </div>
                <div className="productCell">
                  <li className="tableHead">Company</li>
                  <li className="tableData">{item.company}</li>
                </div>
                <div className="productCell">
                  <li className="tableHead">operation</li>
                  <li className="tableData">
                    <button
                      className="productDel"
                      onClick={() => {
                        deleteProduct(item._id);
                      }}
                    >
                      delete
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
