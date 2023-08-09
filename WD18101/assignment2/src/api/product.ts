import instance from ".";
import { IProduct } from "../types/products";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}

export const getById = (id: string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}
export const addProduct = (product: IProduct) => {
    const uri = "/products/"
    return instance.post(uri, product)
}
export const RemoveProduct = (id: number) => {
    const uri = "/products/" + id
    return instance.delete(uri);
}
export const editProduct = (product: IProduct) => {
    const uri = "/products/" + product.id
    return instance.put(uri, product);
}