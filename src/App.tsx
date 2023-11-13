
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Category from './pages/Category'
import Product from './pages/Product'
import Layout from './pages/Layout'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/cat' element={<Category/>}/>
        <Route path='/pro' element={<Product/>}/>
        <Route path='' element={<Category/>}/>
        <Route path='' element={<Category/>}/>
        <Route path='' element={<Category/>}/>
        <Route path='' element={<Category/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    App
    </>
  )
}

export default App
