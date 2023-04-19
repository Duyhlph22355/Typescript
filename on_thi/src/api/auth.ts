import { SigninForm, SignupForm } from "../models";
import instance from "./config";

export const signup = async (data: SignupForm) => {
  const response = instance.post("/signup", data);
  return response;
};

export const signin = async (data: SigninForm) => {
  const response = instance.post("/signin", data);
  return response;
};
