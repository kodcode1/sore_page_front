import React, { useState, useEffect } from "react";
import { Grid, Button ,CardContent } from "@mui/material";
import BlankCard from "../components/BlankCard";
import { ProductInterface } from "../interface/ProductInterface";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Cart = () => {
  const [cartItems, setCartItems] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  return (
    <div style={{ padding: "6rem 8rem 10rem 8rem" }}>
      <h1>Shopping Cart</h1>

      <Grid container spacing={3}>
        {cartItems?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <BlankCard>
            <img src={item.images[0]} alt={item.title} width="100%" height="350px" />
            <CardContent sx={{ p: 3, pt: 2 }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
            <div style={{ width:"100%",textAlign:"center"}}>
            <Button><AddIcon/></Button>{"3"} <Button><RemoveIcon/></Button>
            </div>
            </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cart;
