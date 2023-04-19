import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Products from "../components/Products"
import { IProduct } from "../models"
import { getAll } from "../api/products"

   
const Layout = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProduct = async () => {
        try {
            const { data } = await getAll()
            // console.log(data.);
            setProducts(data)

        } catch (err) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
  return <>
       <div className="container mx-auto px-[65px] my-5">
            <div className="grid grid-cols-4 gap-3">
                {products.map(product => <Products
                    data={product}
                    key={product.id} />)}
            </div>
        </div>
</>
}

export default Layout