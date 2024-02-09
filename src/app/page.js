import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Parallax from "@/components/Parallax";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import TestForm from "@/components/TextForm";
import Cursor from "@/components/Cursor";
import Test from "@/components/Test";
import { textVariants } from "@/lib/animationvariants";

export default function Home() {
    return (
        <div className=''>
            <Cursor />
            <section
                id='Homepage'
                className='h-screen snap-center overflow-hidden '
            >
                <Navbar />
                <HeroSection />
            </section>
            <section id='Services' className='min-h-screen snap-center h-screen '>
                <Parallax type='services' />
            </section>
            <section className='snap-start min-h-screen'>
                <Services />
            </section>
            <section id='Skills' className='min-h-screen snap-center h-screen'>
                <Parallax type='skills' />
            </section>
            <section className='overflow-hidden min-h-screen snap-start'>
                <Skills />
            </section>
            <section id='Portfolio' className='min-h-screen snap-center h-screen'>
                <Parallax type='portfolio' />
            </section>
            <Portfolio />
            <section
                id='Contact'
                className='overflow-hidden min-h-screen snap-end'
            >
                <Contact />
            </section>
        </div>
    );
}
