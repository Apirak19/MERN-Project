import React from "react";

const AddProduct = () => {
  console.warn();
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
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="productPrice">Price</label>
          <input
            type="text"
            id="productPrice"
            placeholder="Enter price of the product"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="productCategory">Category</label>
          <input
            type="text"
            id="productCategory"
            placeholder="Enter category of the product"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="userID">UserID</label>
          <input
            type="text"
            id="userID"
            placeholder="Enter userID"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="companyName">Company</label>
          <input
            type="text"
            id="companyName"
            placeholder="Enter name of the company"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
