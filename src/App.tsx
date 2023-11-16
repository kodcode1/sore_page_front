import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductsPage";
import Layout from "./pages/Layout";
import { CssBaseline } from "@mui/material";
import Cart from "./pages/Cart";
import MyMap from "./components/mapStors";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SingIn";



function App() {


  return (
    <>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/map" element={<MyMap />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SingIn />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
