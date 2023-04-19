import { useEffect, useState } from "react"
import { getAll } from "../api/product"
import { IProduct } from "../models"
import Product from "../components/user/product"

const Home = () => {
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

    return <div className=" my-[20px]">
        <h1>ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-3">
            {products.map(product => <Product
                data={product}
                key={product.id} />)}
        </div>
    </div>
}

export default Home