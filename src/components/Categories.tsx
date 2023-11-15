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
            dispatch(setCategory("all"));
            navigate("/product");
          }}
          sx={{ color: "white" }}
        >
          All Category
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setCategory("smartphones"));
            navigate("/product");
          }}
          sx={{ color: "white" }}
        >
          Smartphones
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setCategory("laptops"));
            navigate("/product");
          }}
          sx={{ color: "white" }}
        >
          Laptops
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setCategory("electronics"));
            navigate("/product");
          }}
          sx={{ color: "white" }}
        >
          Electronics
        </Button>
        <Button variant="outlined" onClick={() => {
          dispatch(setCategory("fragrances"));
          navigate("/product")}
          } sx={{ color: "white" }}>
          Fragrances
        </Button>
        <Button variant="outlined" onClick={() => {
          dispatch(setCategory("skincare"));
          navigate("/product")
          }} sx={{ color: "white" }}>
          Skincare
        </Button>
        <Button variant="outlined" onClick={() => {
          dispatch(setCategory("groceries"));
          navigate("/product")
          }} sx={{ color: "white" }}>
          Groceries
        </Button>
        <Button variant="outlined" onClick={() =>{ 
          dispatch(setCategory("home-decoration"));
          navigate("/product")
          }} sx={{ color: "white" }}>
          Home Decoration
        </Button>
      </Box>
    </div>
  );
};

export default Categories;
