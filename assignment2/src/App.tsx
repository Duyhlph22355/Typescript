import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import ProductDetail from './pages/productDetail'
import Signup from './pages/signup'
import Signin from './pages/signin'
import UserLayout from './components/user'
import AdminLayout from './components/admin'
import Admin_home from './pages/admin_home'
import ProductUpdate from './pages/admin_product-update'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='product/:id' element={<ProductDetail/>}/>
      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Admin_home/>}/>
        <Route path='product/:id' element={<ProductUpdate/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
