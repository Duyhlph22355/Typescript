import instance from "."
import { IUser } from "../types/user"

export const getAll_Role = () => {
    const uri = "/roles"
    return instance.get(uri)
}
export const getAll_User = () => {
    const uri = "/users"
    return instance.get(uri)
}
export const getById_User = (id: string) => {
    const uri = "/users/" + id
    return instance.get(uri)
}
export const addUser = (User: IUser) => {
    const uri = "/users/"
    return instance.post(uri, User)
}
export const RemoveUser = (id: number) => {
    const uri = "/users/" + id
    return instance.delete(uri);
}
export const editUser = (User: IUser) => {
    const uri = "/users/" + User.id
    return instance.put(uri, User);
}
export const signin = (User: IUser) => {
    const uri = "/users/"
    return instance.post(uri, User)
}