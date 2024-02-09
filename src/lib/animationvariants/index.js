export const textVariants = {
    initial: {
        x: -150,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12,
            staggerChildren: 0.5
        }
    }
};

export const buttonVariants = {
    initial: {
        scale: 0,
        opacity: 1
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 8,
            staggerChildren: 0
        }
    }
};

export const scrollUpDown = {
    initial: {
        y: 0
    },
    animate: {
        y: 10,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 8,
            repeat: Infinity,
            repeatType: "mirror"
        }
    }
};

export const cardVariant = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    hidden: { opacity: 0, scale: 0 }
};

export const textUpVariant = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12,
            staggerChildren: 0.5
        }
    },
    hidden: { opacity: 0, scale: 0 }
};

export const Contactvariants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12,
            staggerChildren: 0.1
        }
    }
};



