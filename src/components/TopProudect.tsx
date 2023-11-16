import React from "react";
import CardLayers3d from "./CardLayers3d";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductInterface } from "../interface/ProductInterface";
function TopProudect() {
  const [TopProudect, setTopProudect] = useState<ProductInterface[] | undefined>();
  useEffect(() => {
    const fetchData = async () => {

      const response = await axios.get("https://my-backend-project-9d14.onrender.com/api/products");
      const topProudect: ProductInterface[] = response.data;
      setTopProudect(topProudect);
    };

    fetchData();
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Top Product</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", padding: "40px" }}>
        {TopProudect && <CardLayers3d {...{ title: TopProudect[0].title, images: TopProudect[0].images[0] }} />}
        {TopProudect && <CardLayers3d {...{ title: TopProudect[1].title, images: TopProudect[1].images[1] }} />}
        {TopProudect && <CardLayers3d {...{ title: TopProudect[2].title, images: TopProudect[2].images[2] }} />}
        {TopProudect && <CardLayers3d {...{ title: TopProudect[3].title, images: TopProudect[3].images[3] }} />}
        {TopProudect && <CardLayers3d {...{ title: TopProudect[4].title, images: TopProudect[4].images[4] }} />}

      </div>
    </>
  );
}

export default TopProudect;
