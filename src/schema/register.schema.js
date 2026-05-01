import { z } from "zod";

export const registerSceham = z.object({
 username:z.string().nonempty().min(2).max(10),
 firstName:z.string().nonempty().min(2).max(10),
 lastName:z.string().nonempty().min(2).max(10),
 phone:z.string().nonempty().regex(/^(01)[0-25]\d{8}$/),
  email: z
    .string().nonempty()
    .min(1, "Email is required")
    .email("Invalid email format"),

 password: z
    .string().nonempty()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-zA-Z]/, "Must contain at least one letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^a-zA-Z0-9]/, "Must contain a special character"),
    rePassword:z.string()
}).refine(data=>data.password == data.rePassword,{path:['rePassword'],error:'not match'})