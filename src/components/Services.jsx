"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { textVariants, cardVariant } from "@/lib/animationvariants";

const cmsAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_API_ENDPOINT;

const myServices = [
    {
        id: 1,
        name: "Web Design",
        description:
            "I can design beautiful and responsive websites that suit your needs and vision. I use modern tools and frameworks such as HTML, CSS, Bootstrap, and Tailwind to create stunning web pages that work across different devices and browsers.",
        image: "https://img.icons8.com/?size=96&id=114334&format=png"
    },
    {
        id: 2,
        name: "Web Development",
        description:
            "I can develop dynamic and interactive web applications that deliver high performance and functionality. I use popular technologies such as JavaScript, React, Node.js, Express, MongoDB, and MySQL to build robust back-end and front-end systems that meet your requirements and expectations.",
        image: "https://img.icons8.com/?size=96&id=l0UsZRTvcGel&format=png"
    },
    {
        id: 3,
        name: "Web Hosting",
        description:
            "I can host your website on reliable and secure servers that ensure fast loading and uptime. I use platforms such as AWS, Heroku, Firebase, and Netlify to deploy and manage your web applications with ease and efficiency.",
        image: "https://img.icons8.com/?size=160&id=yVlK86vqz6GE&format=png"
    },
    {
        id: 4,
        name: "Web Integration",
        description:
            "I can integrate your website with various third-party services and APIs that enhance its functionality and usability. I can work with services such as Google Maps, Stripe, PayPal, Mailchimp, Twilio, and more to provide features such as payment processing, geolocation, email marketing, SMS notifications, and more.",
        image: "https://img.icons8.com/?size=96&id=GtKvA4suLFWD&format=png"
    },
    {
        name: "Web Migration and Porting",
        description:
            "I can migrate and port your website from one platform or technology to another with minimal disruption and maximum compatibility. I can help you switch from legacy systems to modern frameworks, from one hosting provider to another, from one database to another, and more.",
        image: "https://img.icons8.com/?size=96&id=yVhO6IrLt66u&format=png"
    }
];

export default function Services() {
    return (
        <motion.div
            style={{ background: "linear-gradient(180deg, #0c0c1d, #111132)" }}
            className='md:min-h-screen px-3 md:px-12 lg:px-24'
        >
            <motion.section
                id='features'
                className='font-serif relative block px-6 py-10 md:py-20   border-t border-b border-neutral-900 bg-transparent '
            >
                <motion.div
                    variants={textVariants}
                    initial='initial'
                    whileInView={"animate"}
                    viewport={{ once: true }}
                    className='relative mx-auto max-w-5xl text-center'
                >
                    <motion.span
                        variants={textVariants}
                        className='text-gray-400 md:text-[30px] my-3 flex items-center justify-center font-medium uppercase tracking-wider'
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        variants={textVariants}
                        className='block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl md:text-[58px]'
                    >
                        What We Offer
                    </motion.h2>
                    <motion.p
                        variants={textVariants}
                        className='md:text-[28px]  my-4 w-full  bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400 '
                    >
                        Immersed in the world of code and design, I craft
                        digital wonders as a web alchemist. From weaving
                        visually captivating webs to conjuring seamless user
                        experiences, my creative spirit thrives in the realm of
                        both frontend and backend development. Each line of code
                        is a stroke on the canvas of innovation, and every
                        project is an opportunity to sculpt a unique digital
                        masterpiece. Let's turn your ideas into a symphony of
                        pixels and possibilities.
                    </motion.p>
                </motion.div>

                <motion.div style={{gridAutoRows: "1fr"}} className='relative mx-auto max-w-7xl z-10  grid  grid-cols-1 gap-10 pt-14 sm:grid-cols-1  lg:grid-cols-2'>
                    {myServices.map(service => {
                        return (
                            <motion.div
                                variants={cardVariant}
                                key={service.name}
                                initial='hidden'
                                whileInView='visible'
                                whileTap={{
                                    scale: 0.98
                                }}
                                whileHover={{
                                    scale: 1.1
                                }}
                                className='rounded-md  border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow  '
                            >
                                <motion.div className='button-text bg-gray-700 mx-auto flex h-12 w-12 items-center justify-center rounded-md p-2 '>
                                    <img
                                        className='object-contain w-full h-full'
                                        src={service.image}
                                        alt="service_image"
                                    />
                                </motion.div>
                                <motion.h3 className='mt-6  text-gray-400 md:text-[24px] font-bold'>
                                    {service.name}
                                </motion.h3>
                                <motion.p className='md:text-[22px]  my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
                                    {service.description}
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.section>
        </motion.div>
    );
}
