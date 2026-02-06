function Contact() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-4">
          Contact Me
        </h2>
        <p className="text-center text-purple-600 mb-10">
          Have a project, opportunity, or just want to connect? Feel free to
          reach out 👋
        </p>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <button
              type="submit"
              className="self-start bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 h-px bg-purple-100" />

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-between text-sm text-purple-700 gap-4">
            <p>📧 bhagyashree@email.com</p>
            <p>📍 India</p>
            <p>💼 Open to opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
