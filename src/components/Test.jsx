"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

const Box = ({ num }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();
    console.log(inView);
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <div className='h-screen flex items-center justify-center'>
            <motion.div
                className='h-[200px] w-[200px] bg-amber-600'
                ref={ref}
                variants={boxVariant}
                initial='hidden'
                animate={control}
            >
                <h1>Box {num} </h1>
            </motion.div>
        </div>
    );
};

export default function Test() {
    return (
        <div className='App'>
            <Box num={1} />
            <Box num={2} />
            <Box num={3} />
        </div>
    );
}
