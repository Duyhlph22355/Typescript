import { IProduct } from "../models";
import instance from "./config";

export const getAll = () => {
  return instance.get("/products");
};

export const getDetail = (id: number | string ) => {
  return instance.get(`/products/${id}`);
};

export const createProduct = (data: IProduct) => {
  return instance.post("/products", data);
};

export const updateProduct = (id: number | string, data: IProduct) => {
  return instance.put(`/products/${id}`, data);
};

export const deleteProduct = (id: number | string) => {
  return instance.delete(`/products/${id}`);
};
