import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function Contact() {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://portfolio-3-9zew.onrender.com/api/v1/users/sendmessage',
        { name, email, message }
      );
      alert('Message Sent Successfully 🚀');
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <>
      {/* TOP INFO */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <p className="text-purple-600 font-medium text-lg">
            🚀 Full-stack Developer (MERN)
          </p>

          <div className="mt-6 flex flex-col gap-3 text-gray-700">
            <a
              href="mailto:bhagyashreepawar1618@gmail.com"
              className="hover:text-purple-700 transition"
            >
              📧 bhagyashreepawar1618@gmail.com
            </a>

            <a
              href="https://github.com/bhagyashreepawar1618"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-700 transition"
            >
              💻 GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-700 transition"
            >
              🔗 LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-4"
          >
            Let’s Connect
          </motion.h2>

          <p className="text-center text-gray-600 mb-10">
            Open to internships, collaborations, or just a quick chat 👋
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 border border-purple-100"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-full border border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                />
              </div>

              <textarea
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />

              <button
                type="submit"
                className="w-full md:w-fit bg-gradient-to-r from-purple-700 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition duration-300 shadow-md"
              >
                Send Message 🚀
              </button>
            </form>

            {/* Divider */}
            <div className="my-10 h-px bg-purple-100" />

            {/* Bottom Info */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4 text-center md:text-left">
              <p>📧 bhagyashreepawar1618@gmail.com</p>
              <p>📍 India</p>
              <p className="text-purple-700 font-medium">
                💼 Open to opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
