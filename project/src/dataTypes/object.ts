// Object declaration 
// Object literal 
const sinhvien: {name: string, age: number, homeTown?: string} = {
    name: "Duy",
    age: 20,
    homeTown: "Tuyên Quang",
}
interface Book {
    authors: Author[],
    book_cover?: string,
    categories: {id: number, name: string, is_leaf: boolean},
    current_seller: Seller
}
interface Author {
    id: number,
    name: string,
    slug: string,
}
interface Seller {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
}
enum ROLE {STAFF, MANAGER, USER}
type User = {
    username: string,
    passwword: string,
    email: string,
    login: () => void,
    logout: () => void
}
type Admin = User & {
    role: ROLE.MANAGER | ROLE.STAFF
}