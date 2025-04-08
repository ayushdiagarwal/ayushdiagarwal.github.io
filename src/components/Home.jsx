import React from "react";

const Home = () => {
    return (
        <div className="h-[calc(100vh-4rem)] flex items-center justify-center mt-16">
            <div className="text-center transform -translate-y-30">
                <h1 className="text-6xl font-bold mb-4">
                    Hi, I'm Ayush. 
                </h1>
                <h2 className="text-4xl text-gray-700">
                    Software Developer / Web Developer
                </h2>
                <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                    I build exceptional digital experiences for the web.
                    <br />
                    I'm current looking for a software internship.
                </p>
            </div>
        </div>
    );
};

export default Home;