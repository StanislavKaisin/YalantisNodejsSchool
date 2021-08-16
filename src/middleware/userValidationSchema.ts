import { object, string } from "yup";

export const userCreateValidationSchema = object({
  body: object({
    name: string()
      .min(3, "Name should not be shorter than 3 characters")
      .max(35, "Name should not be larger than 35 characters")
      .required("Name is required"),
    surname: string()
      .min(3, "Surname should not be shorter than 3 characters")
      .max(35, "Surname should not be larger than 35 characters")
      .required("Surname is required"),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
    avatar: string(),
  }),
});

export const userUpdateValidationSchema = object({
  body: object({
    name: string()
      .min(3, "Name should not be shorter than 3 characters")
      .max(35, "Name should not be larger than 35 characters"),
    surname: string()
      .min(3, "Surname should not be shorter than 3 characters")
      .max(35, "Surname should not be larger than 35 characters"),
    email: string().email("Must be a valid email"),
    avatar: string(),
  }),
});
