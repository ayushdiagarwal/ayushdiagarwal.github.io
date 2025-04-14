const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center text-center py-20 px-6 md:px-10"
    >
      {/* HEADER */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          <span className="text-red-500 font-mono text-lg mr-2">04.</span>
          <h2 className="text-3xl font-bold text-gray-800">What's Next?</h2>
        </div>
        <p className="max-w-xl text-gray-600 text-base leading-relaxed">
          I’m currently looking for a full-time role as a software engineer or web developer.
          Whether you’ve got a question, a collaboration idea, or just want to say hello —
          I’d love to hear from you!
        </p>
      </div>

      {/* BUTTON */}
      <a
            className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-red-300"
            href="mailto:ayushdiagarwal.dev@gmail.com"
          >
            Say Hello
      </a>
    </section>
  );
};

export default Contact;
