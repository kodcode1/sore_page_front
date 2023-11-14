import Categories from "../components/Categories";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { increment, setCategory } from "../features/index";

const ProductPage = () => {
  
  return (
  <div>
    <Categories/>
    <Products/>
  </div>
  );
};

export default ProductPage;
