import React from "react";
import CardLayers3d from "./CardLayers3d";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../interface/ProductInterface";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../features/productReducer";

function TopCategory() {
  const [TopCat, setTopCat] = useState<Category[] | undefined>();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
      const topCat: Category[] = response.data;
      setTopCat(topCat);
    };

    fetchData();
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Top Category</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", padding: "40px" }}>
        <Button
          onClick={() => {
            dispatch(setCategory((TopCat ? (TopCat[0]?.id).toString() : undefined) as unknown as string));
            navigate("/product");
          }}
        >
          {TopCat && <CardLayers3d {...{ title: TopCat[0].name, images: TopCat[0].image }} />}
        </Button>
        <Button
          onClick={() => {
            dispatch(setCategory((TopCat ? (TopCat[1]?.id).toString() : undefined) as unknown as string));
            navigate("/product");
          }}
        >
          {TopCat && <CardLayers3d {...{ title: TopCat[1].name, images: TopCat[1].image }} />}
        </Button>{" "}
        <Button
          onClick={() => {
            dispatch(setCategory((TopCat ? (TopCat[2]?.id).toString() : undefined) as unknown as string));
            navigate("/product");
          }}
        >
          {TopCat && <CardLayers3d {...{ title: TopCat[2].name, images: TopCat[2].image }} />}
        </Button>{" "}
        <Button
          onClick={() => {
            dispatch(setCategory((TopCat ? (TopCat[3]?.id).toString() : undefined) as unknown as string));
            navigate("/product");
          }}
        >
          {TopCat && <CardLayers3d {...{ title: TopCat[3].name, images: TopCat[3].image }} />}
        </Button>{" "}
        <Button
          onClick={() => {
            dispatch(setCategory((TopCat ? (TopCat[4]?.id).toString() : undefined) as unknown as string));
            navigate("/product");
          }}
        >
          {TopCat && <CardLayers3d {...{ title: TopCat[4].name, images: TopCat[4].image }} />}
        </Button>
      </div>
    </>
  );
}

export default TopCategory;
