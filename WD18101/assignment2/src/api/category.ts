import instance from "."
import { ICategory } from "../types/category"

export const getAll_Cate = () => {
    const uri = "/categories"
    return instance.get(uri)
}

export const getById_cate = (id: string) => {
    const uri = "/categories/" + id
    return instance.get(uri)
}
export const addCategory = (Category: ICategory) => {
    const uri = "/categories/"
    return instance.post(uri, Category)
}
export const RemoveCategory = (id: number) => {
    const uri = "/categories/" + id
    return instance.delete(uri);
}
export const editCategory = (Category: ICategory) => {
    const uri = "/categories/" + Category.id
    return instance.put(uri, Category);
}