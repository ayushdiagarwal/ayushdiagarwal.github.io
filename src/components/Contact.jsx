const Contact = () => {
  return (
    <section
      id="contact"
      className={`md:flex md:justify-between md:items-center gap-16 md:h-full pt-10`}
    >
      {/* MAIN TEXT */}
      <div className="flex flex-col items-center justify-center h-full py-10">
        {/* HEADINGS */}
        <div>
          <div className="font-roboto text-olive mb-2 text-xl text-center">
            04. <span className="text-black">What's Next?</span>
          </div>

          <div className="font-ubuntu text-olive mb-3 text-6xl font-semibold text-center">
            Get In Touch
          </div>
          <div className="font-ubuntu text-grey my-5 text-base text-center max-w-2xl">
            Currently, I am actively seeking a full-time job as a software engineer and web
            developer. Whether you have a question or simply want to say hi, I
            will do my best to get back to you!
          </div>
          <div className="flex justify-center items-center">
            <a
              href="mailto:ayushdiagarwal.dev@gmail.com"
              className="font-roboto py-2 px-4 border border-olive hover:border-b-4 duration-300 rounded text-sm my-5 text-grey "
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;