import { Box, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  setCategory } from "../features/productReducer";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div style={{ background: "#2196f3" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
          variant="outlined"
          onClick={() => {
            dispatch(setCategory("0"));
            navigate("/product");
          }}
          sx={{ color: "white" }}
        >
          All Category
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setCategory("1"));
            navigate("/product");
          }}
          sx={{ color: "white" }}
        >
          Clothes
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setCategory("2"));
            navigate("/product");
          }}
          sx={{ color: "white" }}
        >
          Electronics
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setCategory("3"));
            navigate("/product");
          }}
          sx={{ color: "white" }}
        >
          Furniture
        </Button>
        <Button variant="outlined" onClick={() => {
          dispatch(setCategory("4"));
          navigate("/product")}
          } sx={{ color: "white" }}>
          Shoes
        </Button>
        <Button variant="outlined" onClick={() => {
          dispatch(setCategory("5"));
          navigate("/product")
          }} sx={{ color: "white" }}>
          Skincare
        </Button>
        <Button variant="outlined" onClick={() => {
          dispatch(setCategory("7"));
          navigate("/product")
          }} sx={{ color: "white" }}>
          Coffee
        </Button>
        <Button variant="outlined" onClick={() =>{ 
          dispatch(setCategory("10"));
          navigate("/product")
          }} sx={{ color: "white" }}>
          Home Decoration
        </Button>
      </Box>
    </div>
  );
};

export default Categories;
