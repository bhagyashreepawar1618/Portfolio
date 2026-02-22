import myimg from '../../assets/myimg.jpeg';
import Contact from '../Contact/Contact';
import Skill from '../Skill/Skill';
import FullstackProjects from '../Project/projectlayout/fullstack/FullstackProjects';
import Education from '../Education/Education.jsx';
function About() {
  return (
    <>
      <section className="min-h-screen bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* TEXT - Left Side */}
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-[#635599] mb-6">
              About Me
            </h1>

            <p className="text-lg leading-8">
              Hey! 👋 I’m a Computer Engineering student who loves building
              real-world web applications. I focus on creating practical,
              complete projects instead of just learning theory.
            </p>

            <p className="text-lg leading-8 mt-4">
              I’ve built a <strong>YouTube Clone</strong> as a full-stack
              project and developed a <strong>Food Management system</strong>.
              Currently, I’m working on a <strong>Social Media Clone</strong>{' '}
              and learning <strong>Next.js</strong> to build scalable
              production-ready applications.
            </p>

            <h2 className="text-2xl font-semibold text-[#635895] mt-8">
              What I’m Learning 🚀
            </h2>

            <ul className="text-lg leading-8 mt-3 space-y-1">
              <li>⚛️ React & Next.js</li>
              <li>🧠 Advanced JavaScript & APIs</li>
              <li>🗄️ Node.js, Express & MongoDB</li>
              <li>🚀 Building scalable applications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#63559f] mt-8">
              My Goal ✨
            </h2>

            <p className="text-lg leading-8 mt-3">
              My goal is to become a confident fullstack developer who builds
              clean, scalable, and meaningful applications while continuously
              improving every day.
            </p>
          </div>

          {/* IMAGE - Right Side */}
          {/* IMAGE - Right Side */}
          <div className="md:w-1/3 flex flex-col items-center md:items-end">
            <img
              src={myimg}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />

            {/* Small Bio Under Image */}
            <div className="mt-4 text-center md:text-right">
              <h3 className="text-xl font-semibold text-[#635599]">
                BHAGYASHREE GORAKH PAWAR
              </h3>
              <p className="text-gray-600 text-sm">
                2nd Year Computer Engineering Student
              </p>
              <p className="text-gray-600 text-sm">MERN Stack Developer</p>
            </div>
          </div>
        </div>
      </section>
      {/* // education section */}
      <Education />

      {/* projects section fullstack only */}
      <FullstackProjects />

      {/* skills section  */}
      <Skill />

      {/* contact me section */}
      <Contact />
    </>
  );
}

export default About;
