import { useState, useEffect, useRef } from "react";
import githubIcon from '../assets/github.png';
import raycaster from "../assets/1.png";
import journal from "../assets/2.gif";
import flapp from "../assets/3.png";
import chatterBox from "../assets/4.jpg";

const projectsData = {
  featured: [
    {
      title: "Raycaster",
      description: "This project is a simple Raycaster that generates pseudo 3D scenes. It uses basic raycasting techniques to simulate a 3D environment on a 2D plane, providing an interactive and visually engaging experience. The project is implemented using Rust and SDL2, showcasing the power and efficiency of these technologies in creating real-time graphics applications.",
      image: raycaster,
      links: {
        github: "https://github.com/AmyRChen/MERN-SocialMedia"
      },
      technologies: ["Rust", "SDL2"]
    },
    {
      title: "Journal Web App",
      description: "Online Journal Tool that allows users to create, edit, and delete journal entries. It features a user-friendly interface and secure authentication, ensuring that users' data is protected. The application is built using Python and Django, leveraging SQL for database management.",
      image: journal,
      links: {
        github: "https://github.com/ayushdiagarwal/Journal-Web-App"
      },
      technologies: ["Python", "Django", "SQL"]
    },
    {
      title: "Reinforcement Learning Flappy Bird",
      description: "Implemented a neural network which learns to play Flappy Bird through Neuroevolution with fixed topologies from scratch. The project involves training the neural network using genetic algorithms to evolve the weights and biases. The neural network controls the bird's movements, learning to navigate through the pipes by optimizing its performance. This project showcases the application of machine learning techniques in game development and provides insights into training AI agents for complex tasks.",
      image: flapp,
      links: {
        github: "https://github.com/ayushdiagarwal/Flapp",
      },
      technologies: ["Python", "Numpy"]
    },
    {
      title: "ChatterBox",
      description: "This is a chat application that utilizes Chat Engine for real-time communication between users. It integrates with OpenAI's chatGPT API to enable intelligent and natural language conversations. Users can engage with an AI chatbot and connect with other users by adding them to chat groups.",
      image: chatterBox,
      links: {
        github: "https://github.com/ayushdiagarwal/chatterBox"
      },
      technologies: ["React", "Firebase", "Javascript", "Express.js"]
    }
  ],
  other: [
    {
      title: "Sudoku Solver",
      description: "Simple Sudoku Solver using backtracking",
      links: {
        github: "https://github.com/ayushdiagarwal/Sudoku-Solver-JS"
      },
      technologies: ["JavaScript", "Algorithms"]
    },
    {
      title: "Multiplayer-Maze Game",
      description: "A collaborative maze game where multiple players navigate through procedurally generated labyrinths",
      links: {
        github: "https://github.com/ayushdiagarwal/multi-maze"
      },
      technologies: ["JavaScript", "Socket.io"]
    },
    {
      title: "Procedural Generation",
      description: "This project implements 1D and 2D Perlin Noise in JavaScript, based on Ken Perlin's original paper, 'Improving Noise'. It demonstrates procedural generation using Perlin noise, commonly used for creating natural-looking textures, terrains, and other procedural content.",
      links: {
        github: "https://github.com/ayushdiagarwal/Procedural-Generation"
      },
      technologies: ["JavaScript", "Canvas API"]
    },
    {
      title: "AI-based Tic-Tac-Toe",
      description: "Simple terminal based tic-tac-toe game in rust which uses minimax algorithm for the AI player moves",
      links: {
        github: "https://github.com/ayushdiagarwal/tic-tac-Rust"
      },
      technologies: ["Rust", "AI Algorithms"]
    },
    {
      title: "A-Path Visualizer",
      description: "A learning project made on the visualization of the A* path finding algorithm.",
      links: {
        github: "https://github.com/ayushdiagarwal/A--path-visualizer"
      },
      technologies: ["JavaScript", "Algorithms", "Visualization"]
    },
  ]
};

// Custom hook for scroll animation
const useScrollAnimation = () => {
  const [elements, setElements] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentElements = document.querySelectorAll('.scroll-animation');
    currentElements.forEach((el) => {
      observer.current.observe(el);
    });

    setElements(currentElements);

    return () => {
      if (observer.current) {
        elements.forEach((el) => {
          observer.current.unobserve(el);
        });
      }
    };
  }, []);

  return { className: 'scroll-animation opacity-0 transition-opacity duration-700' };
};

const ProjectCard = ({ project, isFeatured = false, isReversed = false }) => {
  const { className: animationClass } = useScrollAnimation();

  return (
    <div 
      className={`${animationClass} flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} 
        justify-center items-center mt-12 mb-24 gap-8 group`}
    >
      {isFeatured && project.image && (
        <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-lg shadow-md">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>      
      )}
      
      <div className="w-full md:w-1/2 p-6 bg-white bg-opacity-95 rounded-lg shadow-lg">
        <div className="flex flex-row justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
          <div className="flex">
            {project.links.github && (
              <a
                className="bg-white rounded-full w-8 h-8 p-1 ml-3 hover:bg-red-50 shadow-md transition-all duration-300 transform hover:-translate-y-1"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <img src={githubIcon} alt="github" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
        
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-red-50 text-red-800 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const OtherProjectCard = ({ project }) => {
  const { className: animationClass } = useScrollAnimation();

  return (
    <div 
      className={`${animationClass} p-4 w-full sm:w-1/2 lg:w-1/3 transform transition-all duration-300 hover:-translate-y-2`}
    >
      <div className="h-full bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden p-6 flex flex-col hover:shadow-lg transition-all duration-300">
        <div className="flex items-center mb-3">
          <h3 className="text-xl font-semibold text-gray-800 flex-grow">{project.title}</h3>
          {project.links.github && (
            <a
              className="bg-red-50 rounded-full w-8 h-8 p-1 hover:bg-red-100 transition-colors duration-300 flex items-center justify-center"
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <img src={githubIcon} alt="github" className="w-5 h-5" />
            </a>
          )}
        </div>
        
        <p className="leading-relaxed text-gray-600 flex-grow mb-4">
          {project.description || "A personal project exploring software development concepts and techniques."}
        </p>
        
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-red-50 text-red-800 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const { className: animationClass } = useScrollAnimation();

  // Add CSS for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.7s ease forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="side projects" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className={`${animationClass} mb-16`}>
        <div className="flex items-center">
          <span className="text-red-500 font-mono text-lg mr-2">02.</span>
          <h2 className="text-3xl font-bold text-gray-800">Projects I've Built</h2>
          <div className="h-px bg-gray-300 flex-grow ml-4"></div>
        </div>
        <p className="text-gray-600 mt-4 max-w-2xl">
          A collection of projects that showcase my skills and interests in software development, 
          machine learning, and interactive applications.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-24">
        {projectsData.featured.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            isFeatured={true} 
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Other Projects */}
      <div className={`${animationClass} text-center mb-8`}>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Other Noteworthy Projects</h3>
        <p className="text-gray-600">A collection of smaller but equally interesting projects</p>
      </div>

      <div className="flex flex-wrap -mx-4">
        {projectsData.other.slice(0, showMore ? projectsData.other.length : 3).map((project, index) => (
          <OtherProjectCard key={index} project={project} />
        ))}
      </div>

      {projectsData.other.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More Projects"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;