
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import Layout from './pages/Layout'
import {CssBaseline} from "@mui/material"

function App() {

  return (
    <>
    <CssBaseline/>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='' element={<Home/>}/>
        <Route path='' element={<Home/>}/>
        <Route path='' element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
