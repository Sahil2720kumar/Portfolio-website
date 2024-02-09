"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { textUpVariant, cardVariant } from "@/lib/animationvariants";
import { gql, request } from "graphql-request";

const cmsAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_API_ENDPOINT;
const query = gql`
    query MyQuery {
        projects {
            id
            name
            image {
                url
            }
            url
            describtion
        }
    }
`;

const Single = ({ project }) => {
    const ref = useRef();

    // const { scrollYProgress } = useScroll({
    //         target: ref
    //     });
    //
    //     const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    //
    return (
        <section className='h-screen snap-start px-3 md:px-12 font-serif'>
            <div className='flex items-center justify-center w-full h-full overflow-hidden'>
                <div className='h-full md:h-[calc(100vh-100px)] md:w-[70%] m-auto flex flex-col lg:w-[90%] lg:flex-row lg:gap-5  items-center justify-center gap-[20px] '>
                    <motion.div
                        className='imageContainer lg:flex-1  rounded-xl w-full max-h-[300px]'
                        ref={ref}
                    >
                        <img
                            className='w-full rounded-xl h-full object-contain md:object-cover'
                            src={project.image.url}
                            alt=''
                        />
                    </motion.div>
                    <motion.div
                        variants={textUpVariant}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className='textContainer lg:flex-1 flex text-center lg:text-left items-center lg:items-start  justify-center flex-col gap-[20px] md:gap-[20px] '
                    >
                        <motion.h2
                            variants={textUpVariant}
                            className='text-[36px] md:text-[60px] lg:text-[50px]  font-bold text-center lg:text-left'
                        >
                            {project.name}
                        </motion.h2>
                        <motion.p
                            variants={textUpVariant}
                            className='text-[gray] px-2  text-[16px] md:text-[28px] lg:text-[22px] '
                        >
                            {project.describtion}
                        </motion.p>
                        <motion.button
                            whileTap={{
                                scale: 0.8
                            }}
                            variants={textUpVariant}
                            className='z-50 relative bg-[orange] md:text-[22px]  text-black px-5 py-2 rounded-xl font-bold border-none cursor-pointer'
                        >
                            <a href={project.url} target='_blank'>
                                See Demo
                            </a>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function Portfolio() {
    const ref = useRef();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await request(cmsAPI, query);
                const response = result?.projects;

                setProjects(response);
            } catch (error) {
                // Handle error
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log("projects", projects);
    }, [projects]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <div className='relative' ref={ref}>
            <div className='z-0 sticky top-0  left-0  pt-[calc(100vh-100px)] md:pt-2 text-[orange] text-center font-bold '>
                <h1 className='text-[24px] md:text-[56px]'>
                    Featured Projects
                </h1>
                <motion.div
                    style={{ scaleX }}
                    className='progressBar h-[5px] md:h-[10px] bg-white'
                ></motion.div>
            </div>
            {projects?.map(project => (
                <Single project={project} key={project.id} />
            ))}
        </div>
    );
}
