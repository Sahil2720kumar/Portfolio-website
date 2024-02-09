import { z } from "zod";

export const contactValidator = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    message: z.string().min(1, { message: "Message is required" })
});

export const contactArrayValidator = z.array(contactValidator);
