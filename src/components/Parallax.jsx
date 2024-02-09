"use client";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent
} from "framer-motion";

export default function Parallax({ type }) {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // useMotionValueEvent(scrollYProgress, "change", latest => {
    //         console.log("Page scroll: ", latest);
    //     });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <motion.div
            ref={ref}
            style={{
                background:
                    type === "services" || type === "skills"
                        ? "linear-gradient(180deg, #111132, #0c0c1d)"
                        : "linear-gradient(180deg, #111132, #505064)"
            }}
            className='h-full relative w-full overflow-hidden  flex items-center justify-center'
        >
            <motion.h1
                style={{ y: yText }}
                className='font-serif text-[70px] px-5 font-bold text-center'
            >
                {type === "services" ? "What I'm Do?" : ""}
                {type === "portfolio" ? "What I'm Did?" : ""}
                {type === "skills" ? "What My Skills?" : ""}
            </motion.h1>

            <motion.div className='z-30 mountains bg-mountains bg-contain bg-no-repeat md:bg-cover bg-bottom w-full h-full absolute  '></motion.div>
            <motion.div
                style={{ y: yBg }}
                className={`${
                    type === "services" || type === "skills"
                        ? "bg-planets"
                        : "bg-sun"
                } z-20 planets&sun  bg-contain bg-no-repeat md:bg-cover bg-bottom w-full h-full absolute   `}
            ></motion.div>
            <motion.div
                style={{ x: yBg }}
                className='bg-stars  z-10   bg-no-repeat bg-cover bg-bottom w-full h-full absolute  '
            ></motion.div>
        </motion.div>
    );
}
