import { useState } from 'react';
import axios from 'axios';
function Contact() {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    //api call here
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
      {/* contact me  */}

      {/* Contact Info */}
      <center>
        <div className="flex flex-col gap-4 text-purple-700 text-base">
          <p className="text-purple-600">🚀 MERN Stack Developer</p>
          <a
            href="mailto:yourgmail@gmail.com"
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
      </center>
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
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="w-full border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  className="w-full border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <textarea
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <button
                type="submit"
                onClick={handleSubmit}
                className="self-start bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 h-px bg-purple-100" />

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-between text-sm text-purple-700 gap-4">
              <p>📧 bhagyashreepawar1618@email.com</p>
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
