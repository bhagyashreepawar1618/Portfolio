import myimg from '../../assets/myimg.jpeg';
import Contact from '../Contact/Contact.jsx';
import Skill from '../Skill/Skill.jsx';
import FullstackProjects from '../Project/projectlayout/fullstack/FullstackProjects.jsx';
import Education from '../Education/Education.jsx';

function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-50 to-white px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* TEXT SECTION */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#5b4b8a] mb-6">
              About Me
            </h1>

            <p className="text-lg leading-8 text-gray-700">
              Hey! 👋 I’m a Computer Engineering student who loves building
              real-world web applications. I focus on creating practical,
              complete projects instead of just learning theory.
            </p>

            <p className="text-lg leading-8 mt-4 text-gray-700">
              I’ve built a <strong>YouTube Clone</strong> as a full-stack
              project and developed a <strong>Food Management system</strong>.
              Currently, I’m working on a <strong>Social Media Clone</strong>{' '}
              and learning <strong>Next.js</strong> to build scalable
              production-ready applications.
            </p>

            <h2 className="text-2xl font-semibold text-[#635895] mt-8">
              What I’m Learning 🚀
            </h2>

            <ul className="text-lg leading-8 mt-4 space-y-2 text-gray-700">
              <li>⚛️ React & Next.js</li>
              <li>🧠 Advanced JavaScript & APIs</li>
              <li>🗄️ Node.js, Express & MongoDB</li>
              <li>🚀 Building scalable applications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#63559f] mt-8">
              My Goal ✨
            </h2>

            <p className="text-lg leading-8 mt-4 text-gray-700">
              My goal is to become a confident fullstack developer who builds
              clean, scalable, and meaningful applications while continuously
              improving every day.
            </p>
          </div>

          {/* IMAGE + BIO SECTION */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative">
              <img
                src={myimg}
                alt="Profile"
                className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-purple-200"
              />
              <div className="absolute inset-0 rounded-full bg-purple-300 opacity-10 blur-2xl"></div>
            </div>

            {/* BIO CARD */}
            <div className="mt-6 bg-white shadow-md rounded-xl px-6 py-4 text-center w-full">
              <h3 className="text-xl font-semibold text-[#5b4b8a]">
                Bhagyashree Gorakh Pawar
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                2nd Year Computer Engineering Student
              </p>
              <p className="text-purple-600 text-sm font-medium">
                MERN Stack Developer
              </p>
            </div>
          </div>
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
