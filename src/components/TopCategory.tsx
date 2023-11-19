import React, { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../interface/ProductInterface";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../features/productReducer";
import CardLayers3d from "./CardLayers3d";

function TopCategory() {
  const [topCat, setTopCat] = useState<Category[] | undefined>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
        const topCatData: Category[] = response.data;
        setTopCat(topCatData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error here, you can set an error state or display a message to the user.
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (index: number) => {
    if (topCat && topCat[index]) {
      dispatch(setCategory(topCat[index].id.toString()));
      navigate("/product");
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Top Category</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", padding: "40px" }}>
        {topCat &&
          topCat.slice(0, 5).map((category, index) => (
            <Button key={index} onClick={() => handleButtonClick(index)}>
              <CardLayers3d {...{ title: category.name, images: category.image }} />
            </Button>
          ))}
      </div>
    </>
  );
}

export default TopCategory;