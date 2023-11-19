import React, { useEffect, useState } from "react";
import axios from "axios";
import CardLayers3d from "./CardLayers3d";
import { ProductInterface } from "../interface/ProductInterface";

function TopProduct() {
  const [topProduct, setTopProduct] = useState<ProductInterface[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://my-backend-project-9d14.onrender.com/api/products");
        const topProductData: ProductInterface[] = response.data;
        setTopProduct(topProductData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Top Product</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", padding: "40px" }}>
        {topProduct &&
          topProduct.slice(0, 5).map((product, index) => (
            <CardLayers3d key={index} {...{ title: product.title, images: product.images[index] }} />
          ))}
      </div>
    </>
  );
}

export default TopProduct;