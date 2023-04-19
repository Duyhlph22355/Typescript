import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Products from "../components/Products"
import { IProduct } from "../models"
import { getAll } from "../api/products"
import { Outlet } from "react-router-dom"

const Home = () => {
    return <>
        <Header></Header>
        <div className="w-full mt-18">
            <img
                className="w-full h-[500px] object-cover"
                src="https://qtcshop.com/Content/uploads/2022/09/banner-home-1.jpg"
                alt=""
            />
        </div>
        <Outlet></Outlet>
        
        <Footer></Footer>
    </>
}

export default Home