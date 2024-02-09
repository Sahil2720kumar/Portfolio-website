"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Contactvariants } from "@/lib/animationvariants";
import { PhoneSvg } from "@/svgs";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactValidator } from "@/lib/validators/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { gql, GraphQLClient } from "graphql-request";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

const cmsAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_API_ENDPOINT;
const graphcmsToken = process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN;
const mutation = gql`
    mutation MyMutation($name: String!, $email: String!, $message: String!) {
        createContact(data: { name: $name, email: $email, message: $message }) {
            id
            name
            email
            message
        }
    }
`;
// Create GraphQL client
const client = new GraphQLClient(cmsAPI, {
    headers: {
        authorization: `Bearer ${graphcmsToken}`
    }
});

export default function Contact() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(contactValidator)
    });
    console.log(errors);
    const ref = useRef();
    const formRef=useRef()
    const isInView = useInView(ref, { margin: "-100px" });

    const saveContact = async data => {
        console.log("saveContact called");
        try {
            const response = await client.request(mutation, data);
            console.log(response);
            const emailjsResponse = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                }
            );
            toast.success("Contact Saved Successfully", {
                position: "top-center"
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.log(error);
                return;
            }
            console.log(error);
            toast.error("Something Went Wrong", {
                position: "top-center"
            });
        }
    };

    const onSubmit = async data => {
        await saveContact(data);
    };

    return (
        <motion.div
            ref={ref}
            variants={Contactvariants}
            initial='initial'
            whileInView='animate'
            className='relative overflow-hidden font-serif min-h-screen  max-w-[1366px] px-3 pt-20 pb-10 md:px-12 flex flex-col lg:flex-row items-center justify-center sm:gap-y-10'
        >
            <motion.div
                className='textContainer flex-1 flex flex-col gap-[20px] md:gap-y-10 text-center items-center justify-center'
                variants={Contactvariants}
            >
                <motion.h1
                    className='text-[33px] font-bold md:text-7xl'
                    variants={Contactvariants}
                >
                    Let’s work together
                </motion.h1>
                <motion.div className='item' variants={Contactvariants}>
                    <motion.h2 className='text-2xl md:text-4xl font-bold'>
                        Mail
                    </motion.h2>
                    <motion.span className='text-base md:text-2xl'>
                        hello@react.dev
                    </motion.span>
                </motion.div>
                <motion.div className='item' variants={Contactvariants}>
                    <motion.h2 className='text-2xl font-bold md:text-4xl '>
                        Address
                    </motion.h2>
                    <motion.span className='text-base md:text-2xl '>
                        Hello street New York
                    </motion.span>
                </motion.div>
                <motion.div className='item' variants={Contactvariants}>
                    <motion.h2 className='text-2xl md:text-4xl  font-bold'>
                        Phone
                    </motion.h2>
                    <motion.span className='text-base md:text-2xl '>
                        +1 234 5678
                    </motion.span>
                </motion.div>
            </motion.div>
            <motion.div className='formContainer mt-5 relative flex-1 w-[90%]'>
                <motion.div
                    className='phoneSvg w-full  absolute flex items-center justify-center z-[-1] stroke-[orange]'
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <PhoneSvg isInView={isInView} />
                </motion.div>
                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    ref={formRef}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                    className='flex flex-col gap-[20px]'
                >
                    {" "}
                    <div className='w-full '>
                        <input
                            type='text'
                            placeholder='Name'
                            {...register("name")}
                            name='name'
                            className='w-full p-2.5 md:p-5 bg-transparent border border-[white] text-white rounded'
                        />
                        {errors.name && (
                            <div className='text-red-500'>
                                {errors.name.message}
                            </div>
                        )}
                    </div>
                    <div>
                        <input
                            type='email'
                            placeholder='Email'
                            {...register("email")}
                            name='email'
                            className='w-full p-2.5 md:p-5 bg-transparent border border-[white] text-white rounded'
                        />
                        {errors.email && (
                            <div className='text-red-500'>
                                {errors.email.message}
                            </div>
                        )}
                    </div>
                    <div>
                        <textarea
                            className='w-full p-2.5 md:p-5 bg-transparent border border-[white] text-white rounded'
                            rows={8}
                            placeholder='Message'
                            {...register("message")}
                            name='message'
                        />
                        {errors.message && (
                            <div className='text-red-500'>
                                {errors.message.message}
                            </div>
                        )}
                    </div>
                    <motion.button
                        whileTap={{
                            scale: 0.8
                        }}
                        disabled={isSubmitting}
                        className='px-2 py-2 font-bold bg-[orange] text-black border-none cursor-pointer rounded-xl'
                    >
                        {isSubmitting ? "Loading..." : "Submit"}
                    </motion.button>
                </motion.form>
            </motion.div>
        </motion.div>
    );
}
