import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`${scrolled ? 'bg-white shadow-md' : 'bg-red-50'} p-4 sticky top-0 z-50 transition-all duration-300`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo section */}
                <div className="text-black font-bold text-xl">
                    <span className="text-red-500">&lt;</span>
                    <span>Ayush</span>
                    <span className="text-red-500">/&gt;</span>
                </div>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden focus:outline-none" 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {mobileMenuOpen ? (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        ) : (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-2 items-center">
                    <li>
                        <button 
                            onClick={() => scrollToSection('about')} 
                            className="text-black hover:text-red-500 px-4 py-2 transition duration-300 font-medium"
                        >
                            <span className="text-red-500 font-mono">01.</span> About
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('side projects')} 
                            className="text-black hover:text-red-500 px-4 py-2 transition duration-300 font-medium"
                        >
                            <span className="text-red-500 font-mono">02.</span> Projects
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('contact')} 
                            className="text-black hover:text-red-500 px-4 py-2 transition duration-300 font-medium"
                        >
                            <span className="text-red-500 font-mono">03.</span> Contact
                        </button>
                    </li>
                    <li className="flex items-center">
                        <a 
                            href="https://drive.google.com/file/d/1MLfnzRgOThLLj6EZfWmTcUnTNYQl-nEv/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-black bg-transparent hover:bg-red-500 hover:text-white border border-red-500 px-4 py-2 rounded transition duration-300 font-medium inline-flex items-center"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Navigation Menu */}
            <div 
                className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
                    mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                <div className="container mx-auto py-2">
                    <ul className="flex flex-col space-y-2 p-4">
                        <li>
                            <button 
                                onClick={() => scrollToSection('about')} 
                                className="text-black hover:text-red-500 py-2 w-full text-left font-medium"
                            >
                                <span className="text-red-500 font-mono">01.</span> About
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('side projects')} 
                                className="text-black hover:text-red-500 py-2 w-full text-left font-medium"
                            >
                                <span className="text-red-500 font-mono">02.</span> Projects
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('contact')} 
                                className="text-black hover:text-red-500 py-2 w-full text-left font-medium"
                            >
                                <span className="text-red-500 font-mono">03.</span> Contact
                            </button>
                        </li>
                        <li className="pt-2">
                            <a 
                                href="https://drive.google.com/file/d/1mPk_DH2WoELr6BkRjJL0Z2Yy0nfXgako/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-center text-black bg-transparent hover:bg-red-500 hover:text-white border border-red-500 px-4 py-2 rounded transition duration-300 font-medium"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;