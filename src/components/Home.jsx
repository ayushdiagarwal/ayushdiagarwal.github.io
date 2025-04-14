import React, { useEffect, useState, useRef } from "react";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);
        
        // Optional: Add scroll indicator animation
        const timer = setTimeout(() => {
            const scrollIndicator = document.getElementById('scroll-indicator');
            if (scrollIndicator) {
                scrollIndicator.classList.add('animate-bounce');
            }
        }, 2000);
        
        return () => clearTimeout(timer);
    }, []);

    // Animation utility functions (simple fade-in without framer-motion)
    const getAnimationStyle = (delay) => {
        return {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.7s ease, transform 0.7s ease ${delay}s`
        };
    };

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative px-4 sm:px-0">
            <div className="text-left w-full max-w-3xl transform" style={getAnimationStyle(0)}>
                <p 
                    className="text-red-500 font-mono mb-4 ml-1 text-lg sm:text-xl"
                    style={getAnimationStyle(0.2)}
                >
                    Hi there, I'm
                </p>
                
                <h1 
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
                    style={getAnimationStyle(0.4)}
                >
                    Ayush.
                </h1>
                
                <h2 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-500 mb-6"
                    style={getAnimationStyle(0.6)}
                    ref={textRef}
                >
                    I bring ideas to life with code.
                </h2>
                
                <p 
                    className="text-lg text-gray-600 max-w-2xl"
                    style={getAnimationStyle(0.8)}
                >
                    I'm a student passionate about exploring the vast world of computing. 
                    From web development to algorithms, I love diving deep into different 
                    technologies and understanding how they work.
                </p>
                
                <div
                    className="mt-10"
                    style={getAnimationStyle(1)}
                >
                    <button
                        onClick={() => document.getElementById('side projects').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-transparent hover:bg-red-500 text-red-500 hover:text-white py-2 px-6 border border-red-500 hover:border-transparent rounded transition duration-300 font-medium"
                    >
                        View My Work
                    </button>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div 
                id="scroll-indicator" 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex flex-col items-center">
                    <span className="text-gray-400 text-sm mb-2">Scroll</span>
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-gray-400"
                    >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Home;