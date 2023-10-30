import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

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
        {products.map((item, index) => {
          return (
            <Card sx={{ maxWidth: "500px", margin: "20px" }}>
              <CardOverflow>
                <AspectRatio>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography
                  level="body-xs"
                  endDecorator={
                    <Chip
                      component="span"
                      size="sm"
                      variant="soft"
                      color="neutral"
                    >
                      ID: {item._id}
                    </Chip>
                  }
                >
                  No. {index + 1}
                </Typography>
                <Typography level="body-xs">{item.category}</Typography>
                <Link
                  href="#product-name"
                  fontWeight="lg"
                  color="neutral"
                  textColor="text.primary"
                >
                  {item.name}
                </Link>
                <Link
                  href="#product-company"
                  fontWeight="sm"
                  color="neutral"
                  textColor="text.primary"
                >
                  {item.company}
                </Link>
                <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                  {item.price}
                </Typography>
              </CardContent>
              <CardOverflow>
                <Button
                  variant="solid"
                  color="danger"
                  size="lg"
                  onClick={() => {
                    deleteProduct(item._id);
                  }}
                >
                  Delete
                </Button>
              </CardOverflow>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
