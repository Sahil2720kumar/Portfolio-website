"use client";
import { useState, useContext, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import { HoverContext } from "@/providers/CursorHoverProvider";

export default function Sidebar() {
    const ref = useRef();
    const { isHover, setIsHover } = useContext(HoverContext);

    useEffect(() => {
        const mouseEnter = () => {
            console.log("mouseEnter ");
            setIsHover(true);
        };
        const mouseLeave = () => {
            console.log("mouseLeave");
            setIsHover(false);
        };
        // console.log(ref);
        const sidebarRef = ref.current;
        sidebarRef.addEventListener("mouseenter", mouseEnter);
        sidebarRef.addEventListener("mouseleave", mouseLeave);

        return () => {
            sidebarRef.removeEventListener("mouseenter", mouseEnter);
            sidebarRef.removeEventListener("mouseleave", mouseLeave);
        };
    }, [setIsHover]);

    const variants = {
        open: {
            opacity: 1,
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            opacity: 1,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const [open, setOpen] = useState(false);
    return (
        <motion.div
            className='flex items-center justify-center flex-col bg-white text-black'
            animate={open ? "open" : "closed"}
        >
            <motion.div
                className='bg-white flex items-center justify-center fixed w-[200px] md:w-[400px] z-[999] top-0 bottom-0 left-0 '
                variants={variants}
                ref={ref}
                initial={{ opacity: 0 }}
            >
                <Links />
            </motion.div>
            <button
                className='fixed flex items-center justify-center w-[25px] h-[25px] rounded-full border-none bg-transparent z-[999] top-[40px] left-[37px] cursor-pointer'
                onClick={() => setOpen(!open)}
            >
                <svg width='23' height='23' viewBox='0 0 23 23'>
                    <motion.path
                        strokeWidth='3'
                        stroke='black'
                        strokeLinecap='round'
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                    />
                    <motion.path
                        strokeWidth='3'
                        stroke='black'
                        strokeLinecap='round'
                        d='M 2 9.423 L 20 9.423'
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                    />
                    <motion.path
                        strokeWidth='3'
                        stroke='black'
                        strokeLinecap='round'
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                    />
                </svg>
            </button>
        </motion.div>
    );
}
