import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-red-50 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black font-bold text-xl">
                    Logo
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-black hover:text-gray-300 px-8">
                            01. About
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-black hover:text-gray-300 px-8">
                            02. Projects
                        </a>
                    </li>
                    <li>
                        <a href="/services" className="text-black hover:text-gray-300 px-8">
                            03. Contact
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1rxVgp8fSJXeCPmpXZxEpLEVZsPHlecGV/view?usp=sharing" target="_blank" className="text-black hover:text-gray-300 border-1 p-2">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;