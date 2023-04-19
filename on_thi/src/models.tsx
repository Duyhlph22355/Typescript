import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export interface IProduct {
    id: number,
    name: string,
    price: number,
    original_price: number,
    description: string,
    brand: string,
    originId: number;
}
export const signupSchema = Yup.object({
    name: Yup.string().required("Vui lòng không được bỏ trống"),
    email: Yup.string()
        .email("Email sai định dạng")
        .required("Vui lòng không được bỏ trống"),
    password: Yup.string().min(6).required("Vui lòng không được bỏ trống"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
        .required("Vui lòng không được bỏ trống"),
    role: Yup.string(),
});

export type SignupForm = Yup.InferType<typeof signupSchema>;

export const signinSchema = Yup.object({
    email: Yup.string().required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
})
export type SigninForm = Yup.InferType<typeof signinSchema>

export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().required("Trường dữ liệu bắt buộc"),
    brand: Yup.string().required("Trường dữ liệu bắt buộc"),
    originId: Yup.number().required("Trường dữ liệu bắt buộc"),
})

export type updateForm = Yup.InferType<typeof updateSchema>
