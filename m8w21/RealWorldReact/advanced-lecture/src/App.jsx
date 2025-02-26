import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Products from './components/Products';
import Dashboard from './components/Dashboard';
import ProductCategory from './components/ProductCategory';
import Navbar from './components/Navbar';

function App() {
  // Three routes
  // index - / - <h1>Welcome to Retro Shop</h1>
  // products - /products - <h1>Here is your Product List</h1>
  // Implement error handling for routes


  // /products
  // /products/:id
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="*" element={<h1>Error: Page not found!</h1>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="products">
          <Route index element={<Products/>}/>
          <Route path=":category" element={<ProductCategory/>} />
        </Route>
        {/* <Route path="/products" element={<Products/>}/>
        <Route path="/products/:category" element={<ProductCategory/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
