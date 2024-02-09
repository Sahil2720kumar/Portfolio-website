"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Github } from "@/svgs";
import Sidebar from "./Sidebar"


export default function Navbar() {
    const svgContainer = {
        hidden: {},
        visible: {
            x: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.5,
                when: "beforeChildren"
            }
        }
    };

    const svgVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    };

    return (
        <div className='relative h-[70px] md:h-[100px] bg-transparent'>
           <Sidebar/>
            <div className='p-3 h-full flex items-center justify-between'>
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='text-[20px] md:text-[42px] font-bold'
                >
                    Sahil Kumar
                </motion.span>

                <motion.div
                    variants={svgContainer}
                    animate='visible'
                    initial='hidden'
                    className='flex gap-[15px]'
                >
                    <motion.a className="" variants={svgVariant} href='#'>
                        <Facebook />
                    </motion.a>
                    <motion.a  variants={svgVariant} target="_blank" href='https://www.instagram.com/sahil2720kumar/'>
                        <Instagram />
                    </motion.a>
                    <motion.a variants={svgVariant} href='#'>
                        <Twitter />
                    </motion.a>
                    <motion.a variants={svgVariant} target="_blank" href='https://github.com/Sahil2720kumar'>
                        <Github />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
