import React from "react";

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-red-50 p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black font-bold text-xl">
                    Logo
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <button 
                            onClick={() => scrollToSection('about')} 
                            className="text-black hover:text-gray-300 px-8"
                        >
                            01. About
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('side projects')} 
                            className="text-black hover:text-gray-300 px-8"
                        >
                            02. Projects
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('contact')} 
                            className="text-black hover:text-gray-300 px-8"
                        >
                            03. Contact
                        </button>
                    </li>
                    <li>
                        <a 
                            href="https://drive.google.com/file/d/1rxVgp8fSJXeCPmpXZxEpLEVZsPHlecGV/view?usp=sharing" 
                            target="_blank" 
                            className="text-black hover:text-gray-300 border-1 p-2"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;