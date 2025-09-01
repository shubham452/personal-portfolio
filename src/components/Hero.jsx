import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BitsRain from "./BitsRain"; // Adjust this import path if needed

const Hero = () => {
    const [text] = useTypewriter({
        words: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <section
            id="hero"
            className="min-h-screen w-full max-w-[110rem] mx-auto
                flex flex-col md:grid md:grid-cols-2 md:items-start items-center
                px-6 py-1 relative overflow-hidden"
        >
            {/* Left Content */}
            <div className="flex flex-col gap-8 z-10 pt-10 md:pt-15">
                {/* Top Intro */}
                <div className="flex flex-col gap-4 relative">
                    <img
                        src="/Background Blurs.webp"
                        alt="Blur"
                        className="hidden md:block absolute w-[110rem]
                        top-[-30%] left-[-45%] opacity-75 -z-10"
                    />
                    <h2 className="text-2xl text-[#e5e9f0] font-normal">
                        Hi all. I am
                    </h2>
                    <h1 className="text-[3.6rem] md:text-[6.4rem] font-semibold text-[#e5e9f0] leading-[1.1]">
                        Shubham Kumar
                    </h1>

                    {/* Typing Animation */}
                    <div className="flex gap-4 text-[#4d5bce] text-[2rem] md:text-[3.4rem]">
                        <span>&gt;</span>
                        <span>{text}</span>
                        <Cursor cursorStyle="|" />
                    </div>
                </div>

                {/* Comment + Git Link */}
                <div className="flex flex-col gap-4 text-[#607b96] text-[1.4rem] md:text-[1.8rem]">
                    <p className="hidden md:block">// checkout my projects section to see my work</p>
                    <p className="hidden md:block">// you can also see it on my github page</p>
                    <p className="block md:hidden">// Find my profile on Github</p>
                    <div className="flex gap-2 flex-wrap text-[1.4rem] md:text-[1.8rem]">
                        <span className="text-[#4d5bce]">const</span>
                        <span className="text-[#43d9ad]">githubLink</span>
                        <span className="text-white">=</span>
                        <span className="text-[#e99287]">"https://</span>
                        <br className="block md:hidden" />
                        <span className="text-[#e99287] hidden md:inline">github.com/shubham452</span>
                        <span className="text-[#e99287] relative md:hidden">github.com/shubham/portfolio-v2</span>
                        <span className="text-[#e99287]">"</span>;
                    </div>
                </div>
            </div>

            {/* Right Side Image with BitsRain animation */}
            <div className="hidden md:block relative ml-10 w-[55rem] max-w-full aspect-[1/1.2]">
                {/* Bits animation as background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <BitsRain />
                </div>

                {/* (Optional additional blur image for stylistic effect) */}
                <img
                    src="/Background Blurs.webp"
                    alt="Blur"
                    className="absolute w-[110rem]
                        top-[-40%] left-[-45%] opacity-75 -z-10 pointer-events-none"
                    draggable={false}
                />
            </div>
        </section>
    );
};

export default Hero;
