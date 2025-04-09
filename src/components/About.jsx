import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 xl:py-32"
    >
      <div className="z-30 basis-3/5 my-12 md:my-32">
        <div>
          <div className="font-roboto text-olive mb-8 text-3xl">
            01. <span className="text-black">About Me</span>
            <div className="border-b-2 border-tea my-5"></div>
          </div>

          <div className="font-ubuntu text-grey mb-3 text-xl">
          Hey! I’m a second-year undergraduate student studying Electronics and Computer Engineering with a strong passion for learning and exploring the world of technology. Over time, I’ve dived into various domains including web development, AI/ML, and computer graphics—each of which has helped shape my curiosity and technical foundation.
          I’m particularly proficient in full-stack web development and have built several projects that reflect both functionality and creativity. Currently, I’m expanding my knowledge into the world of Web3, exploring how decentralized technologies can shape the future of the internet. I’m always on the lookout for new ideas, tools, and opportunities that push me to grow as a developer and thinker.
          </div>
        </div>
      </div>
      <div>
        <div className="z-30 w-full max-w-[300px] md:max-w-[400px] rounded-full overflow-hidden hover:translate-y-[-5px] duration-300">
          <img src={profileImg} alt="myself" />
        </div>
      </div>
    </section>
  );
};

export default About;