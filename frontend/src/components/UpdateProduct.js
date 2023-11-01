import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import CardActions from "@mui/joy/CardActions";

const UpdateProduct = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const userID = JSON.parse(localStorage.getItem("user"))._id;
  const navigate = useNavigate();

  const getProductDetail = async () => {
    const result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    console.log(result);
  };
  const updateProduct = () => {
    console.log(name, price, company, category);
  };

  useEffect(() => {
    console.log(params);
    getProductDetail();
  }, []);

  return (
    <div className="authPage ">
      <h1 className="title">Edit Product</h1>

      <Card
        variant="outlined"
        sx={{
          maxHeight: "max-content",
          maxWidth: "1000px",
          mx: "auto",
          // to make the demo resizable
          overflow: "auto",
          resize: "horizontal",
        }}
      >
        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
          Edit product {}
        </Typography>
        <Divider inset="none" />
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
            gap: 1.5,
          }}
        >
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>User ID</FormLabel>
            <Input value={userID} />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Category</FormLabel>
            <Input
              placeholder="Enter category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Product name</FormLabel>
            <Input
              placeholder="Enter name of the product"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Price</FormLabel>
            <Input
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Company</FormLabel>
            <Input
              placeholder="Enter name of the company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </FormControl>
          <CardActions sx={{ gridColumn: "1/-1" }}>
            <Button variant="solid" color="success" onClick={updateProduct}>
              Add product
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateProduct;
