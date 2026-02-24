import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://portfolio-3-9zew.onrender.com/api/v1/users/sendmessage',
        {
          name,
          email,
          message,
        }
      );
      console.log('response from backend is =', response.data);
      alert('Message Sent Successfully..!!');
    } catch (error) {
      console.log(
        'Error occured while sending your information ',
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      {/* Top Contact Info Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col gap-4 text-purple-700 text-base items-center">
            <p className="text-purple-600 font-medium">
              🚀 MERN Stack Developer
            </p>

            <a
              href="mailto:bhagyashreepawar1618@gmail.com"
              className="hover:text-purple-900 transition"
            >
              📧 bhagyashreepawar1618@gmail.com
            </a>

            <a
              href="https://github.com/bhagyashreepawar1618"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-900 transition"
            >
              💻 GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-900 transition"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-4">
            Contact Me
          </h2>

          <p className="text-center text-purple-600 mb-10">
            Have a project, opportunity, or just want to connect? Feel free to
            reach out 👋
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
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
                className="w-full md:w-auto bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>

            {/* Divider */}
            <div className="my-10 h-px bg-purple-100" />

            {/* Bottom Info */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-purple-700 gap-4 text-center md:text-left">
              <p>📧 bhagyashreepawar1618@gmail.com</p>
              <p>📍 India</p>
              <p>💼 Open to opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
