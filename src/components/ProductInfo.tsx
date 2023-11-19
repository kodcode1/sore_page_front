import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent, Typography, Grid, Tooltip, Fab, Stack, Rating, IconButton, CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProductInterface } from "../interface/ProductInterface";
import { useState } from "react";

const ProductInfo = () => {
  const product = useSelector((state) => state.product.currentProduct);
  const [cart, setCart] = useState<ProductInterface[]>([]);
  const handleAddToCart = (product: ProductInterface) => {
    let cart_: ProductInterface[] = [];
    if (cart.length == 0) {
      cart_ = JSON.parse(localStorage.getItem("cart") || "[]");
    }
    cart_ = [...cart_, ...cart, product];
    setCart(cart_);
    localStorage.setItem("cart", JSON.stringify(cart_));
  };

  return (
    <div>
      <Card sx={{ display: "flex", justifyContent: "center", padding: 10 }}>
        <CardMedia component="img" sx={{ width: 500 }} image={product.images[0]} alt="product images" />
        <Tooltip title="Add To Cart">
          <IconButton
            size="small"
            color="primary"
            sx={{
              bottom: "75px",
              right: "15px",
              position: "absolute",
              background: "#3f51b5",
              color: "white",
              "&:hover": {
                background: "green",
              },
            }}
            onClick={() => handleAddToCart(product)}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>
        <CardContent sx={{ p: 3, pt: 2 }}>
          <Typography variant="h6">{product.title}</Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6">${product.price}</Typography>
              <Typography color="textSecondary" ml={1} sx={{ textDecoration: "line-through" }}>
                ${product.salesPrice}
              </Typography>
            </Stack>
            <Rating name="read-only" size="small" value={product.rating} readOnly />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductInfo;
