import { motion } from 'framer-motion';
import myimg from '../../assets/myimg.jpeg';
import Contact from '../Contact/Contact.jsx';
import Skill from '../Skill/Skill.jsx';
import FullstackProjects from '../Project/projectlayout/fullstack/FullstackProjects.jsx';
import Education from '../Education/Education.jsx';

function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-50 to-white px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-2/3 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#5b4b8a] mb-6">
              About Me
            </h1>

            <p className="text-lg leading-8 text-gray-700">
              I’m a Computer Engineering student focused on building
              <span className="font-semibold text-purple-700">
                {' '}
                real-world, scalable web applications{' '}
              </span>
              using modern full-stack technologies.
            </p>

            <p className="text-lg leading-8 mt-4 text-gray-700">
              I have developed full-stack projects including a
              <span className="font-semibold"> video streaming platform </span>
              with authentication and personalization features, along with
              systems like
              <span className="font-semibold">
                {' '}
                food management and social platforms
              </span>
              . My work focuses on writing clean backend logic, building secure
              APIs, and creating user-focused experiences.
            </p>

            {/* TECH FOCUS */}
            <h2 className="text-2xl font-semibold text-[#635895] mt-8">
              Current Focus 🚀
            </h2>

            <ul className="text-lg leading-8 mt-4 space-y-2 text-gray-700">
              <li>⚛️ React & Next.js (building production-ready apps)</li>
              <li>🔐 Authentication & API architecture (JWT, REST APIs)</li>
              <li>☁️ Cloud integrations (Cloudinary, file uploads)</li>
              <li>🧠 Exploring TypeScript & Generative AI</li>
            </ul>

            {/* PROFESSIONAL SECTION */}
            <h2 className="text-2xl font-semibold text-[#63559f] mt-8">
              Professional Focus 💼
            </h2>

            <p className="text-lg leading-8 mt-4 text-gray-700">
              I am actively seeking
              <span className="font-semibold text-purple-700">
                {' '}
                internship opportunities{' '}
              </span>
              in Full-stack / MERN development where I can contribute to
              real-world projects and grow by working in a collaborative
              environment.
            </p>

            <p className="text-lg leading-8 mt-4 text-gray-700">
              Through my projects, I have built scalable backend systems with
              <span className="font-semibold">
                {' '}
                JWT authentication, user management, file uploads,{' '}
              </span>
              and
              <span className="font-semibold"> 30+ REST API endpoints</span>,
              focusing on performance, clean architecture, and real-world
              usability.
            </p>
          </motion.div>

          {/* IMAGE + BIO SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 flex flex-col items-center"
          >
            <div className="relative group">
              <img
                src={myimg}
                alt="Profile"
                className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-purple-200 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-purple-300 opacity-10 blur-2xl"></div>
            </div>

            {/* BIO CARD */}
            <motion.div
              whileHover={{ y: -5 }}
              className="mt-6 bg-white shadow-lg rounded-xl px-6 py-4 text-center w-full transition-all"
            >
              <h3 className="text-xl font-semibold text-[#5b4b8a]">
                Bhagyashree Gorakh Pawar
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Computer Engineering Student
              </p>
              <p className="text-purple-600 text-sm font-medium">
                Full-stack Developer (MERN)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Education />
      <FullstackProjects />
      <Skill />
      <Contact />
    </>
  );
}

export default About;
