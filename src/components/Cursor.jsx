"use client";
import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { HoverContext } from "@/providers/CursorHoverProvider";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const mouseMove = e => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, [position]);

    const { isHover } = useContext(HoverContext);

    console.log("isHover", isHover);
    const cursorVariants = {
        initial: {
            x: position.x - 25,
            y: position.y - 25,
            width: "50px",
            height: "50px",
            backgroundColor: "transparent",
            borderColor: "white",
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12
            }
        },
        hover: {
            x: position.x - 37,
            y: position.y - 37,
            width: "75px",
            height: "75px",
            borderColor: "black",
            backgroundColor: "white",
            mixBlendMode: "difference",
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12
            }
        }
    };

    return (
        <motion.div
            className='cursor fixed z-[9999] rounded-full border pointer-events-none '
            variants={cursorVariants}
            animate={isHover ? "hover" : "initial"}
        ></motion.div>
    );
};

export default Cursor;
