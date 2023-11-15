import { useEffect, useState } from "react";
import axios from "axios";
//import { Link , useNavigate} from "react-router-dom";
import { ProductInterface } from "../interface/ProductInterface";
import { CardContent, Typography, Grid, Tooltip, Fab, Stack, Rating, IconButton } from "@mui/material";
import BlankCard from "./BlankCard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState<ProductInterface>();
  const [cart, setCart] = useState<ProductInterface[]>([]);

  const handleAddToCart = (product: ProductInterface) => {
    let cart_: ProductInterface[] = [];
    let tempCart: ProductInterface[];
    if (cart.length == 0) {
      cart_ = JSON.parse(localStorage.getItem("cart") || "[]");
    }
    cart_ = [...cart_, ...cart, product];
    setCart(cart_);
    localStorage.setItem("cart", JSON.stringify(cart_));
  };
  
  const category = useSelector((state) => state.product.categoryChoose);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      const products: ProductInterface = response.data.products;
      setProducts(products);
    };

    fetchData();
  }, []);

  //const navigate = useNavigate();
  console.log(category);

  return (
    <>
      <div style={{ padding: "6rem 8rem 10rem 8rem" }}>
        <Grid container spacing={3}>
          {Array.isArray(products) &&
            products.map((product, index) => (
              <Grid item sm={12} md={4} lg={3} key={index}>
                <BlankCard>
                  {/* <Typography component={Link} to="/"> */}
                  <Typography>
                    <img src={product.images[0]} alt="img" width="100%" height="350px" />
                  </Typography>
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
                </BlankCard>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default Products;
