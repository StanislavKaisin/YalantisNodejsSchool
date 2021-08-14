import { object, string } from "yup";

export const userValidationSchema = object({
  body: object({
    name: string()
      .min(3, "Name should not be short than 3 characters")
      .max(35, "Name should not be larger than 35 characters")
      .required("Name is required"),
    surname: string()
      .min(3, "Name should not be short than 3 characters")
      .max(35, "Name should not be larger than 35 characters")
      .required("Name is required"),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
    avatar: string(),
  }),
});
