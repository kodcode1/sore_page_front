import { useEffect, useState } from "react";
import axios from "axios";
import { CardContent, Typography, Grid, Tooltip, Fab, Stack, Rating, IconButton, CardActionArea } from "@mui/material";
import BlankCard from "./BlankCard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setProduct,setProductCompare ,ProductReducer } from "../features/productReducer";
import { useDispatch } from "react-redux";
import { ProductInterface } from "../interface/ProductInterface";
import BarChartIcon from '@mui/icons-material/BarChart';
const placeholderImageUrl = "https://www.britax-romer.co.uk/on/demandware.static/Sites-Britax-UK-Site/-/default/dw975b844e/images/britax/PlaceholderProductImage.jpg";

const Products = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [cart, setCart] = useState<ProductInterface[]>([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (event: React.MouseEvent, product: ProductInterface) => {
   
    event.stopPropagation();

    let cart_: ProductInterface[] = [];
    if (cart.length === 0) {
      cart_ = JSON.parse(localStorage.getItem("cart") || "[]");
    }
    cart_ = [...cart_, ...cart, product];
    setCart(cart_);
    localStorage.setItem("cart", JSON.stringify(cart_));
  };

  const handleSelectProduct = (event: React.MouseEvent, product: ProductInterface) => {
      event.stopPropagation();
      setCount((count) => count +=1)
      dispatch(setProductCompare(product));
      if ( count === 2) {
        navigate("/productComparison");
      }
    };


  const category = useSelector((state) => state.product.categoryChoose);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        console.log(category);
        if (category === "all") {
          response = await axios.get("https://my-backend-project-9d14.onrender.com/api/products");
        } else {
          response = await axios.get(`https://my-backend-project-9d14.onrender.com/api/categories/${category}`);
        }
        const productsData: ProductInterface[] = response.data;
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
       
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <div style={{ padding: "6rem 8rem 10rem 8rem" }}>
        <Grid container spacing={3}>
          {Array.isArray(products) &&
            products.map((product, index) => (
              <Grid item sm={12} md={4} lg={3} key={index}>
                <CardActionArea
                  onClick={() => {
                    dispatch(setProduct(product));
                    navigate("/info-product");
                  }}
                >
                  <BlankCard>
                    <Typography>
                      <img src={product.images[0] || placeholderImageUrl} alt="img" width="100%" height="350px" />
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
                        onClick={(event) => {handleAddToCart(event, product)}}
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Add To Cart">
                      <IconButton
                        size="small"
                        color="primary"
                        sx={{
                          bottom: "75px",
                          right: "60px",
                          position: "absolute",
                          background: "#3f51b5",
                          color: "white",
                          "&:hover": {
                            background: "green",
                          },
                        }}
                        onClick={(event) => handleSelectProduct(event, product)}
                      >
                        <BarChartIcon />
                      </IconButton>
                    </Tooltip>
                    <CardContent sx={{ p: 3, pt: 2 }}>
                      <Typography variant="h6">{product.title}</Typography>
                      <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                        <Stack direction="row" alignItems="center">
                          <Typography variant="h6">${product.price}</Typography>
                          {product.salesPrice && (
                            <Typography color="textSecondary" ml={1} sx={{ textDecoration: "line-through" }}>
                              ${product.salesPrice}
                            </Typography>
                          )}
                        </Stack>
                        <Rating name="read-only" size="small" value={product.rating} readOnly />
                      </Stack>
                    </CardContent>
                  </BlankCard>
                </CardActionArea>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default Products;
