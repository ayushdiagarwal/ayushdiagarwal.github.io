const About = () => {
  return (
    <section
      id="about"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 xl:py-32"
    >
      <div className="z-30 basis-3/5 my-12 md:my-32">
        <div>
          <div className="font-roboto text-olive mb-2 text-2xl">
            01. <span className="text-black">About Me</span>
            <div className="border-b-2 border-tea my-5"></div>
          </div>

          <div className="font-ubuntu text-grey mb-3 text-base ">
          Hi, I'm Ayush Agarwal—a second-year undergrad at Thapar University. I'm passionate about learning and exploring new technologies. I'm proficient in web development and currently sharpening my skills in areas like machine learning and web3. I enjoy building projects that challenge me and help me grow as a developer.
            .
          </div>
        </div>
      </div>
      <div>
        <div className="z-30 w-full max-w-[300px] md:max-w-[400px] rounded-lg overflow-hidden hover:translate-y-[-5px] duration-300">
          <img src="../assets/idphoto.jpg" alt="myself" />
        </div>
      </div>
    </section>
  );
};

export default About;