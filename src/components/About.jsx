import profileImg from "../assets/profile3.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative md:flex md:justify-between md:items-center gap-16 md:h-full py-10 xl:py-32 px-6 lg:px-20"
    >
      {/* Text Section */}
      <div className="z-30 basis-3/5 my-12 md:my-16 animate-fade-in-up">
        {/* Consistent Header */}
        <div className="mb-16">
          <div className="flex items-center">
            <span className="text-red-500 font-mono text-lg mr-2">01.</span>
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <div className="h-px bg-gray-300 flex-grow ml-4"></div>
          </div>
        </div>

        {/* About Paragraph */}
        <p className="font-ubuntu text-gray-700 text-lg sm:text-xl leading-relaxed tracking-wide">
          Hey! I’m a second-year undergraduate student studying Electronics and Computer Engineering with a strong passion for learning and exploring the world of technology. Over time, I’ve dived into various domains including web development, AI/ML, and computer graphics—each of which has helped shape my curiosity and technical foundation.
          <br /><br />
          I’m particularly proficient in full-stack web development and have built several projects that reflect both functionality and creativity. Currently, I’m expanding my knowledge into the world of Web3, exploring how decentralized technologies can shape the future of the internet. I’m always on the lookout for new ideas, tools, and opportunities that push me to grow as a developer and thinker.
        </p>
      </div>

      {/* Image Section */}
      <div className="z-30 flex justify-center md:justify-end items-center w-full md:w-auto animate-fade-in-up delay-100">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl group transition-transform duration-500 hover:scale-105">
          <img
            src={profileImg}
            alt="myself"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-tea/30 via-white/0 to-olive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none"></div>
        </div>
      </div>

      {/* Optional Background Glow or Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#fefee3] via-white to-[#f0fdf4] opacity-40"></div>
    </section>
  );
};

export default About;
