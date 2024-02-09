"use client";
import Image from "next/image";
import { useState, useContext, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
    textVariants,
    buttonVariants,
    scrollUpDown,
    textSliderVariants
} from "@/lib/animationvariants";
import { HoverContext } from "@/providers/CursorHoverProvider";

export default function Hero() {
    const { isHover, setIsHover } = useContext(HoverContext);
    const buttons = useRef([]);
    useEffect(() => {
        const mouseEnter = () => {
            console.log("mouseEnter buttons ");
            setIsHover(true);
        };
        const mouseLeave = () => {
            console.log("mouseLeave");
            setIsHover(false);
        };
        //console.log(buttons);
        const buttonRefs = buttons.current; // Copying buttons.current to a variable

        buttonRefs.forEach(element => {
            element?.addEventListener("mouseenter", mouseEnter);
            element?.addEventListener("mouseleave", mouseLeave);
        });

        return () => {
            buttonRefs.forEach(element => {
                element?.addEventListener("mouseenter", mouseEnter);
                element?.addEventListener("mouseleave", mouseLeave);
            });
        };
    }, [setIsHover]);
    return (
        <div className='relative px-3 md:px-12 lg:px-5 lg:flex lg:items-center lg:justify-center pb-0 h-[calc(100vh-70px)] md:h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-t from-[#111132] to-[#0c0c1d]'>
            <div className='wrapper mt-5 lg:w-[40%]'>
                <motion.div
                    variants={textVariants}
                    animate='animate'
                    initial='initial'
                    className='text-container  flex-col flex items-center justify-center'
                >
                    <motion.h2
                        variants={textVariants}
                        className='font-serif text-[44px] md:text-[58px] tracking-[4px] font-extrabold text-center text-[rebeccapurple] '
                    >
                        Sahil Kumar
                    </motion.h2>
                    <motion.p
                        variants={textVariants}
                        className='font-serif text-[36px] px-1 md:px-2 md:text-[52px] font-semibold text-center'
                    >
                        Full Stack Web developer and UI designer
                    </motion.p>
                </motion.div>
                <motion.div
                    variants={buttonVariants}
                    animate='animate'
                    initial='initial'
                    className='relative z-50 buttons mt-3 flex gap-[20px] items-center justify-center '
                >
                    <motion.button
                        ref={element => (buttons.current[0] = element)}
                        whileTap={{
                            scale: 0.8
                        }}
                        variants={buttonVariants}
                        className='px-3 py-2 md:px-6 md:py-4 md:text-2xl bg-transparent border border-white text-white hover:bg-white hover:border-black hover:text-black transition font-semibold rounded-xl cursor-pointer'
                    >
                        <a href='#Portfolio'>Projects</a>
                    </motion.button>
                    <motion.button
                        ref={element => (buttons.current[1] = element)}
                        whileTap={{
                            scale: 0.8
                        }}
                        variants={buttonVariants}
                        className='px-3 py-2 md:px-6 md:py-4 md:text-2xl  bg-transparent border border-white text-white hover:bg-white hover:border-black hover:text-black transition font-semibold rounded-xl cursor-pointer'
                    >
                        <a href='#Contact'>Contact</a>
                    </motion.button>
                </motion.div>
                <motion.div
                    variants={scrollUpDown}
                    initial='initial'
                    animate='animate'
                    className='scrollImage absolute z-[99] bottom-[10%]  left-[20px]'
                >
                    <motion.img
                        variants={scrollUpDown}
                        src='/scroll.png'
                        alt='scroll animation image'
                        className='h-[45px] md:h-[65px] w-[45px] md:w-[65px]'
                    />
                </motion.div>
            </div>
            <motion.marquee className='z-0 absolute w-[100%] bottom-[-120px] inline slidingTextContainer text-[45vh] p-0 m-0 text-[#ffffff09] whitespace-nowrap font-bold '>
                Full Stack Web developer and UI designer
            </motion.marquee>
            <motion.div className='lg:relative lg:h-[70%] lg:w-[40%]  '>
                <motion.img
                    className='h-[50%] md:h-[60%]  absolute lg:relative lg:w-[100%] lg:h-[100%] md:left-[5%] bottom-0 object-cover'
                    src='./Hero.png'
                />
            </motion.div>
        </div>
    );
}
