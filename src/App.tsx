import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import Layout from "./pages/Layout";
import { CssBaseline } from "@mui/material";
import Cart from "./pages/Cart";
import MapStors from "./components/MapStors";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SingIn";
import ProductInfo from "./components/ProductInfo";



function App() {


  return (
    <>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductsPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/mapStors" element={<MapStors/>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SingIn />} />
              <Route path="info-product" element={<ProductInfo/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
