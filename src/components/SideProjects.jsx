import { useState } from "react";
import githubIcon from '../assets/github.png';

const projectsData = {
  featured: [
    {
      title: "Raycaster",
      subtitle: "Psuedo 3D Generater",
      description: "Simple Raycaster to create pseudo 3D scenes",
      image: "https://www.worldofmusic.com.au/wp-content/uploads/2024/09/Fender-Player-II-Stratocaster-3-Colour-Sunburst-Full.jpg",
      links: {
        github: "https://github.com/AmyRChen/MERN-SocialMedia"
      },
      technologies: ["Rust", "SDL2"]
    },
    {
      title: "Journal Web App",
      description: "Online Journal Tool",
      image: "https://www.worldofmusic.com.au/wp-content/uploads/2024/09/Fender-Player-II-Stratocaster-3-Colour-Sunburst-Full.jpg",
      links: {
        github: "https://github.com/ayushdiagarwal/Journal-Web-App"
      },
      technologies: ["Python", "Django", "SQL"]
    },
    {
      title: "ChatterBox",
      description: "This is a chat application that utilizes Chat Engine for real-time communication between users. It integrates with OpenAI's chatGPT API to enable intelligent and natural language conversations. Users can engage with an AI chatbot and connect with other users by adding them to chat groups.",
      image: "https://www.worldofmusic.com.au/wp-content/uploads/2024/09/Fender-Player-II-Stratocaster-3-Colour-Sunburst-Full.jpg",
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
      }
    },
    {
      title: "Multiplayer-Maze Game",
      description: "",
      links: {
        github: "https://github.com/ayushdiagarwal/multi-maze"
      }
    },
    {
      title: "Procedural Generation",
      description: "This project implements 1D and 2D Perlin Noise in JavaScript, based on Ken Perlin's original paper, 'Improving Noise'. It demonstrates procedural generation using Perlin noise, commonly used for creating natural-looking textures, terrains, and other procedural content.",
      links: {
        github: "https://github.com/ayushdiagarwal/Procedural-Generation"
      }
    },
    {
      title: "AI-based Tic-Tac-Toe",
      description: "Simple terminal based tic-tac-toe game in rust which uses minimax algorithm for the AI player moves",
      links: {
        github: "https://github.com/ayushdiagarwal/tic-tac-Rust"
      }
    },
    {
      title: "A-Path Visualizer",
      description: "A learning project made on the visualization of the A* path finding algorithm.",
      links: {
        github: "https://github.com/ayushdiagarwal/A--path-visualizer"
      }
    }
  ]
};

const ProjectCard = ({ project, isFeatured = false, isReversed = false }) => {
  return (
    <div className={`flex justify-center items-center mt-12 mb-24 ${isFeatured ? 'flex-row' : 'flex-col'} ${isReversed ? 'flex-row-reverse' : ''}`}>
      {isFeatured && project.image && (
        <div className="rounded-lg overflow-hidden hover:translate-y-[-5px] duration-300">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      
      <div className={`flex flex-col justify-center items-center font-ubuntu text-grey w-10/12 ${isFeatured ? (isReversed ? 'mr-6' : 'ml-6') : ''}`}>
        <div className="flex flex-row justify-between w-full">
          <div className="text-2xl font-semibold">{project.title}</div>
          <div className="flex">
            {project.links.github && (
              <a
                className="bg-deep-white rounded-full w-8 h-8 p-1 ml-3 hover:bg-tea duration-300"
                href={project.links.github}
                target="blank"
              >
                <img src={githubIcon} alt="github" />
              </a>
            )}
          </div>
        </div>
        
        {project.subtitle && (
          <div className="mb-3 text-2xl font-semibold">{project.subtitle}</div>
        )}
        
        <div className="mb-3">{project.description}</div>
        
        {project.technologies && (
          <div className="bg-deep-white rounded-full overflow-hidden p-2 text-sm flex">
            {project.technologies.map((tech, index) => (
              <p key={index} className="mx-2">{tech}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const SideProjects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="side projects" className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
      <div className="z-30 my-12 md:my-32">
        <div className="font-roboto text-olive mb-2 text-2xl">
          03. <span className="text-black">Some Things I've Build</span>
          <div className="border-b-2 border-tea my-5"></div>
        </div>

        {/* Featured Projects */}
        {projectsData.featured.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            isFeatured={true} 
            isReversed={index % 2 !== 0} // This creates the zig-zag pattern
          />
        ))}

        {/* Other Projects */}
        <div className="font-ubuntu font-semibold text-2xl text-olive flex justify-center my-5">
          Explore more side projects
        </div>

        <div className="flex flex-col items-center">
          {showMore && (
            <div className="flex flex-wrap justify-center mt-10">
              {projectsData.other.map((project, index) => (
                <div key={index} className="p-4 max-w-xs hover:translate-y-[-5px] duration-300">
                  <div className="flex rounded-lg h-full bg-deep-white p-8 flex-col">
                    <div className="flex items-center mb-3 text-black text-lg font-medium font-ubuntu">
                      {project.title}
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <p className="leading-relaxed text-base text-grey font-ubuntu">
                        {project.description}
                      </p>
                      <div className="flex flex-row justify-end mt-3">
                        
                        {project.links.github && (
                          <a
                            className="bg-tea rounded-full w-8 h-8 p-1 ml-3 hover:bg-deep-tea duration-300"
                            href={project.links.github}
                            target="blank"
                          >
                            <img src={githubIcon} alt="github" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            className="font-roboto py-2 px-4 border border-olive hover:border-b-4 duration-300 rounded text-base my-5"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SideProjects;