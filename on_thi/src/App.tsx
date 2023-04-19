import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Product_add from './pages/Product_add'
import Product_update from './pages/Product_update'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Product_Detail from './pages/Product_Detail'
import Layout from './pages/Layout'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}>
        <Route index element={<Layout></Layout>}></Route>
        <Route path='/products/:id' element={<Product_Detail></Product_Detail>}></Route>
      </Route>
      <Route path='/admin' element={<Admin></Admin>}></Route>
      <Route path='/admin/add' element={<Product_add></Product_add>}></Route>
      <Route path='//admin/:id/update' element={<Product_update></Product_update>}></Route>
      <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
    </Routes>
  </BrowserRouter>

}

export default App
