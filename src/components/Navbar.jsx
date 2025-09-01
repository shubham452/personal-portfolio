import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { id: 0, label: '_hello', to: '/' },
    { id: 1, label: '_about-me', to: '/about' },
    { id: 2, label: '_projects', to: '/projects' },
    { id: 3, label: '_contact-me', to: '/contact' }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#011627] border-b border-[#1e2d3d] h-16 flex">
                <div className="flex items-center px-6 border-r border-[#1e2d3d] min-w-fit">
                    <Link 
                        to="/" 
                        className="text-[#607b96] text-lg font-medium cursor-pointer hover:text-white transition-colors"
                    >
                        shubham-kumar
                    </Link>
                </div>
                
                <div className="flex-1 flex items-center justify-end">
                    <div className="hidden md:flex">
                        {navLinks.map(link => {
                            const isActive = location.pathname === link.to;
                            return (
                                <Link
                                    key={link.id}
                                    to={link.to}
                                    onClick={closeMenu}
                                    className={`relative text-base px-8 py-4 h-16 flex items-center border-l border-[#1e2d3d] 
                                        hover:text-white cursor-pointer transition-colors
                                        ${isActive ? 'text-[#ffa500] border-b-2 border-[#ffa500]' : 'text-[#607b96]'}`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="md:hidden px-6">
                        <button 
                            onClick={toggleMenu}
                            className="text-white text-2xl cursor-pointer hover:text-[#ffa500] transition-colors"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`fixed top-0 right-0 w-full h-screen bg-[#011627] transform transition-transform duration-300 z-40 
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex flex-col items-start gap-6 p-8 pt-24">
                    {navLinks.map(link => {
                        const isActive = location.pathname === link.to;
                        return (
                            <Link
                                key={link.id}
                                to={link.to}
                                onClick={closeMenu}
                                className={`text-lg w-full border-b border-[#1e2d3d] pb-3 
                                    hover:text-white transition-colors
                                    ${isActive ? 'text-[#ffa500]' : 'text-[#607b96]'}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
