import { motion } from "framer-motion";
import { HoverContext } from "@/providers/CursorHoverProvider";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
};
export default function Links() {
    const items = ["Homepage", "Services", "Skills","Portfolio", "Contact"];

    return (
        <motion.div
            className=' h-full w-full absolute gap-[20px] flex-col flex items-center justify-center '
            variants={variants}
        >
            {items.map(item => (
                <motion.a
                    href={`#${item}`}
                    key={item}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 12
                    }}
                    className='hover:scale-[1.1] hover:font-bold transition  text-[18px] md:text-[40px] '
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.6 }}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
}
