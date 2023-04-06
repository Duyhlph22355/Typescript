import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

import { IProduct } from "../models"
import { getById } from "../api/product"

const ProductDetail = () => {
    // assertion
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const { id } = useParams()

    const fetchProductById = async () => {
        if (id) {
            const { data } = await getById(id)
            setProduct(data)
        }
    }
    useEffect(() => {
        fetchProductById()
    }, [])

    return <>
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div>
                    <h1 className="text-2xl font-bold lg:text-3xl">{product.name}</h1>
                </div>

                <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                    <div className="lg:col-span-3">
                        <div className="relative mt-4">
                            <img
                                alt="Tee"
                                src={product?.images[0].base_url}
                                className="h-full w-full rounded-xl object-cover"
                            />

                            <div
                                className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
                            >
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                </svg>

                                <span className="ml-1.5 text-xs"> Hover to zoom </span>
                            </div>
                        </div>

                        <ul className="mt-1 flex gap-1">
                            <li>
                                <img
                                    alt="Tee"
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="h-16 w-16 rounded-md object-cover"
                                />
                            </li>

                            <li>
                                <img
                                    alt="Tee"
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="h-16 w-16 rounded-md object-cover"
                                />
                            </li>

                            <li>
                                <img
                                    alt="Tee"
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="h-16 w-16 rounded-md object-cover"
                                />
                            </li>

                            <li>
                                <img
                                    alt="Tee"
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="h-16 w-16 rounded-md object-cover"
                                />
                            </li>
                        </ul>
                    </div>

                    <div className="lg:sticky lg:top-0">
                        <form className="space-y-4 lg:pt-8">
                            <fieldset>

                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-red-500 dark:text-white ">{product.price.toLocaleString()} ₫</span>
                                    <span className="text-sm font-bold text-gray-400 dark:text-white ">{product.original_price.toLocaleString()} ₫</span>
                                </div>

                            </fieldset>

                            <fieldset>
                                <legend className="text-lg font-bold">Thông số chi tiết:</legend>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y-2 divide-gray-200 text-sm">


                                        <tbody className="divide-y divide-gray-200">
                                            
                                            <tr className="odd:bg-gray-50">
                                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                                                    John Doe
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                            </tr>
                                            <tr className="odd:bg-gray-50">
                                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                                                    John Doe
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                            </tr>
                                            <tr className="odd:bg-gray-50">
                                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                                                    John Doe
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>

                            </fieldset>
                            

                            <button
                                type="submit"
                                className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                            >
                                Mua Ngay
                            </button>

                            <button
                                type="button"
                                className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                            >
                                Thêm Vào Giỏ Hàng
                            </button>
                        </form>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="prose max-w-none">
                            <p>
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ProductDetail