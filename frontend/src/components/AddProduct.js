import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCateory] = useState("");
  const [company, setCompany] = useState("");
  const userID = JSON.parse(localStorage.getItem("user"))._id;
  const navigate = useNavigate();
  const addProduct = async () => {
    if (name && price && category && company) {
      let result = await fetch("http://localhost:5000/add", {
        method: "post",
        body: JSON.stringify({ name, price, category, userID, company }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      alert("product added successfully");
      navigate("/");
    } else {
      alert("Fill all required data");
    }
  };
  return (
    <div className="authPage ">
      <h1 className="title">Add Product</h1>
      <form action="" className="addProductForm">
        <div className="flex justify-between">
          <label htmlFor="productName">Name</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter name of the product"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="productPrice">Price</label>
          <input
            type="text"
            id="productPrice"
            placeholder="Enter price of the product"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="productCategory">Category</label>
          <input
            type="text"
            id="productCategory"
            placeholder="Enter category of the product"
            value={category}
            onChange={(e) => {
              setCateory(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="userID">UserID</label>
          <input
            type="text"
            id="userID"
            placeholder="Enter userID"
            value={userID}
            onChange={() => {}}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="companyName">Company</label>
          <input
            type="text"
            id="companyName"
            placeholder="Enter name of the company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>
        <button type="button" onClick={addProduct}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
