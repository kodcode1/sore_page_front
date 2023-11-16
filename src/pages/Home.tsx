import React from "react";
import Categories from "../components/Categories";
import TopCategory from "../components/TopCategory";
import TopProudect from "../components/TopProudect";

function Home() {
  return (
    <div>
      <Categories />
      <TopCategory />
      <TopProudect/>
    </div>
  );
}

export default Home;
