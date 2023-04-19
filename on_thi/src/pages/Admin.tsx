import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../models";
import { deleteProduct, getAll } from "../api/products";

const Admin = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }
    const RemovebyId = async (id: string | number) => {
        if (confirm("Bạn có chắc muốn xóa không")) {
            deleteProduct(id).then(() => {
                setProducts(products.filter((product) => product.id != id))
            })
                .catch((err) => {
                    console.log(err.error);

                })
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return <>
        <Link
            to={"/admin/add"}
            className="p-2 bg-blue-500 text-white inline-block rounded-xl mb-3 m-5"
        >
            Add Product
        </Link>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Price
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Original_price
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Brand
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Description
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Origi
                        </th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        products.map(product => (
                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {product.name}
                                </td>
                                <td className="whitespace-normal px-4 py-2 text-gray-700">{product.price}</td>
                                <td className="whitespace-normal px-4 py-2 text-gray-700">{product.original_price}</td>
                                <td className="whitespace-normal px-4 py-2 text-gray-700">{product.brand}</td>
                                <td className="whitespace-normal px-4 py-2 text-gray-700">{product.description}</td>
                                <td className="whitespace-normal px-4 py-2 text-gray-700">
                                    {(() => {
                                        if (product.originId == 1) {
                                            return <span>Việt Nam</span>;
                                        } else if (product.originId == 2) {
                                            return <span>Trung Quốc</span>;
                                        }
                                        else if (product.originId == 3) {
                                            return <span>Pháp</span>;
                                        }
                                    })()}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <Link
                                        to={`/admin/${product.id}/update`}
                                        className="p-2 rounded bg-blue-700 text-white mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button className="bg-red-600 text-white rounded-md p-2 " onClick={() => RemovebyId(product.id)} data-name="${projects.name}" data-id="${projects.id}">Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>

    </>
}

export default Admin