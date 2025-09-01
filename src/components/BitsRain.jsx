import React from 'react';
import { motion } from 'framer-motion';

// Helper: Create random delays and random bits
const getRandom = (min, max) => Math.random() * (max - min) + min;
const getRandomBit = () => (Math.random() > 0.5 ? '1' : '0');

const columns = 12;
const bitsPerColumn = 8;

export default function BitsRain() {
    return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Gradient fade at top and bottom */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-transparent to-transparent opacity-80 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
        {/* Bits Columns */}
        <div className="relative w-full h-full flex">
            {Array.from({ length: columns }).map((_, colIdx) => (
            <div key={colIdx} className="flex flex-col justify-between flex-1 h-full">
                {Array.from({ length: bitsPerColumn }).map((_, bitIdx) => {
                const speed = getRandom(1, 2.5);  // FASTER: 1~2.5 sec per fall
                const delay = getRandom(0, speed);
                const bit = getRandomBit();

                return (
                    <motion.span
                    key={bitIdx}
                    className="mx-auto my-1 text-pink-400 text-lg md:text-xl font-mono select-none opacity-0"
                    initial={{ y: "-10%", opacity: 0 }}
                    animate={{
                        y: ["-10%", "110%"],
                        opacity: [0, 1, 1, 0], // fade in/stay/fade out
                    }}
                    transition={{
                        duration: speed,
                        delay,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                        times: [0, 0.08, 0.92, 1],
                    }}
                    style={{ filter: 'blur(0.5px)' }}
                    >
                    {bit}
                    </motion.span>
                );
                })}
            </div>
            ))}
        </div>
        </div>
    );
}
