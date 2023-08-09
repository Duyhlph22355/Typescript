import React from 'react'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { ICategory } from "../../../types/category";
const EditCategory_admin = (props: any) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [cate, setCate] = useState<ICategory[]>([]);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {
        props.editCategory(data);
        alert("Cập nhật thành công");
        navigate("/admin/category")
    };
    useEffect(() => {
        setCate(props.cate);
        const categories = props.cate.find((item: any) => item.id === Number(id));
        reset(categories)
      }, [props, props.cate]);
  return (
    <div>
         <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name"
                    />
                    {errors.name && (
                        <p className="text-red-500">This field is required</p>
                    )}
                </div>
                <div className="flex items-start mb-6"></div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
    </div>
  )
}

export default EditCategory_admin