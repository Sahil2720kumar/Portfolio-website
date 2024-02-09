"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { textUpVariant } from "@/lib/animationvariants";

const skills = [
    {
        name: "HTML",
        image: "https://img.icons8.com/?size=96&id=v8RpPQUwv0N8&format=png"
    },
    {
        name: "CSS",
        image: "https://img.icons8.com/?size=96&id=21278&format=png"
    },
    {
        name: "JavaScript",
        image: "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"
    },
    {
        name: "React",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
        name: "Node.js",
        image: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
    },
    {
        name: "MongoDB",
        image: "https://seeklogo.com/images/M/mongodb-icon-logo-F5A5E0981A-seeklogo.com.png"
    },
    {
      name:"Tailwind",
      image:"https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
    },
    {
      name:"Socket",
      image:"https://seeklogo.com/images/S/socketio-logo-B8A7F486CD-seeklogo.com.png"
    },
    {
      name:"Nextjs",
      image:"https://www.svgrepo.com/show/354113/nextjs-icon.svg"
    },
    {
      name:"Framer Motion",
      image:"https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
    },
    {
      name:"Python",
      image:"https://img.icons8.com/?size=96&id=13441&format=png"
    },
    {
      name:"Django",
      image:"https://img.icons8.com/?size=96&id=qV-JzWYl9dzP&format=png"
    }
];

export default function Skills() {
    const containerRef = useRef();
    return (
        <div
            style={{ background: "linear-gradient(180deg, #0c0c1d, #111132)" }}
            className='min-h-screen px-3 py-2 md:px-12 lg:px-24'
        >
            <div className='textContainer mt-8'>
                <h1 className='block text-center w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-[38px]  md:text-[58px]'>
                    Skills
                </h1>
            </div>
            <motion.div
                ref={containerRef}
                variants={textUpVariant}
                viewport={{ once: true }}
                initial='hidden'
                whileInView='visible'
                className='py-3 my-3 skillsContainer mt-5 justify-center items-center flex flex-wrap  gap-y-5 gap-x-3 md:gap-y-[35px] md:gap-x-[30px] items-start justify-start'
            >
                {skills.map(skill => {
                    return (
                        <motion.div
                            drag
                            key={skill.name}
                            whileTap={{
                                scale: 0.9
                            }}
                            variants={textUpVariant}
                            dragConstraints={containerRef}
                            className='my-2 w-[100px] h-[100px] md:w-[150px] md:h-[150px] text-center '
                        >
                            <div className='imgContainer bg-[#1f2937]  bg- p-2  rounded-full w-[90%] h-[90%] flex items-center justify-center '>
                                <img alt="skill_image" className="object-contain w-full h-full p-2 md:p-5 " src={skill.image} />
                            </div>
                            <p className='my-1 text-gray-400 font-semibold'>
                                {skill.name}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
