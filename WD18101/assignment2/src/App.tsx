import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/user/Layout';
import Home from './pages/user/Home';
import Products from './pages/user/Products';
import Product_detail from './pages/user/Product_detail';
import Layout_admin from './component/admin/Layout_admin';
import Home_admin from './pages/admin/product/Home_admin';
import AddProduct_admin from './pages/admin/product/AddProduct_admin';
import EditProduct_admin from './pages/admin/product/EditProduct_admin';
import { RemoveProduct, addProduct, editProduct, getAll } from './api/product';
import { IProduct } from './types/products';
import { RemoveCategory, addCategory, editCategory, getAll_Cate } from './api/category';
import { ICategory } from './types/category';
import List_Category from './pages/admin/category/List_Category';
import AddCategory_admin from './pages/admin/category/AddCategory_admin';
import EditCategory_admin from './pages/admin/category/EditCategory_admin';
import { RemoveUser, addUser, editUser, getAll_Role, getAll_User } from './api/user';
import { IUser } from './types/user';
import List_User from './pages/admin/user/List_User';
import Signin from './pages/user/Signin';
import Signup from './pages/user/Signup';
import Edit_User from './pages/admin/user/Edit_User';

function App() {
  const [products, setProducts] = useState([]);
  const [cate, setCate] = useState([]);
  const [user, setUser] = useState([]);
  const [role, setRole] = useState([]);
  useEffect(() => {
    getAll().then(({data}) => setProducts(data));
  }, []);
  
  const handleDeleteProduct = (id: number) => {
    RemoveProduct(id).then(() => setProducts(products.filter((item:any) => item.id !== id)));
  };
  const handleAddProduct = (product: IProduct) => {
    addProduct(product)
  };
  const handleEditProduct = (product: IProduct) => {
    editProduct(product)
  }
  //category
  useEffect(() => {
    getAll_Cate().then(({data}) => setCate(data));
  }, []);
  const handleDeleteCate = (id: number) => {
    RemoveCategory(id).then(() => setCate(cate.filter((item:any) => item.id !== id)));
  };
  const handleAddCate = (cate: ICategory) => {
    addCategory(cate)
  };
  const handleEditCategory = (cate: ICategory) => {
    editCategory(cate)
  }
  //user
  useEffect(() => {
    getAll_User().then(({data}) => setUser(data));
    getAll_Role().then(({data}) => setRole(data));
  }, []);
  const handleDeleteUser = (id: number) => {
    RemoveUser(id).then(() => setUser(user.filter((item:any) => item.id !== id)));
  };
  const handleAddUser = (user: IUser) => {
    addUser(user)
  };
  const handleEditUser = (user: IUser) => {
    editUser(user)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home products={products}></Home>} />
          <Route path="products"  element={<Products products={products}></Products>} />
          <Route
            path="product/:id"
            element={<Product_detail products={products}></Product_detail>}
          />
          <Route path='signin' element={<Signin/>}></Route>
          <Route path='signup' element={<Signup addUser={handleAddUser}/>}></Route>
        </Route>
        <Route path="/admin" element={<Layout_admin></Layout_admin>}>

          <Route
            path="products"
            index
            element={
              <Home_admin
                products={products}
                cate={cate}
                deleteProduct={handleDeleteProduct}
              ></Home_admin>
            }
          />
          <Route
            path="product-add/"
            element={
              <AddProduct_admin
                cate={cate}
                addProduct={handleAddProduct}
              ></AddProduct_admin>
            }
          />
          <Route
            path="product-edit/:id"
            element={
              <EditProduct_admin
                cate={cate}
                products={products}
                editProduct={handleEditProduct}
              ></EditProduct_admin>
            }
          />
          <Route
            path="category"
            index
            element={
              <List_Category
                cate={cate}
                deleteCategory={handleDeleteCate}
              ></List_Category>
            }
          />
          <Route
            path="cate-add/"
            element={
              <AddCategory_admin
                cate={cate}
                addCategory={handleAddCate}
              ></AddCategory_admin>
            }
          />
          <Route
            path="cate-edit/:id"
            element={
              <EditCategory_admin
                cate={cate}
                editCategory={handleEditCategory}
              ></EditCategory_admin>
            }
          />
          <Route
            path="user"
            index
            element={
              <List_User
                user={user}
                role={role}
                deleteUser={handleDeleteUser}
              ></List_User>
            }
          />
          <Route
            path="user-edit/:id"
            index
            element={
              <Edit_User
                user={user}
                role={role}
                editUser={handleEditUser}
              ></Edit_User>
            }
          />
        </Route>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
