import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import ProductDetail from './pages/productDetail'
import Signup from './pages/signup'
import Signin from './pages/signin'
import UserLayout from './components/layout/user/user'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='product/:id' element={<ProductDetail/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
