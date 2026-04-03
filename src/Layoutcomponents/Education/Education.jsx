import { motion } from 'framer-motion';

function Education() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-purple-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#635599] mb-12 text-center md:text-left"
          >
            Education
          </motion.h1>

          <div className="space-y-10 relative border-l-2 border-purple-200 pl-6">
            {/* School */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white border border-purple-100 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* dot */}
              <div className="absolute -left-9 top-8 w-4 h-4 bg-purple-500 rounded-full"></div>

              <h2 className="text-xl md:text-2xl font-semibold text-[#635895]">
                Jawahar Navodaya Vidyalaya, Nashik
              </h2>

              <p className="text-gray-600 mt-2 text-base md:text-lg">
                6th to 12th • CBSE Board
              </p>

              <p className="text-sm text-purple-600 mt-2 leading-relaxed">
                Built a strong academic foundation with focus on
                problem-solving, discipline, and core fundamentals.
              </p>
            </motion.div>

            {/* College */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white border border-purple-100 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* dot */}
              <div className="absolute -left-9 top-8 w-4 h-4 bg-purple-500 rounded-full"></div>

              <h2 className="text-xl md:text-2xl font-semibold text-[#635895]">
                Dr. D. Y. Patil Institute of Technology, Pune
              </h2>

              <p className="text-gray-600 mt-2 text-base md:text-lg">
                B.E. Computer Engineering • 2nd Year
              </p>

              <p className="text-sm text-purple-600 mt-2 leading-relaxed">
                Focused on full-stack development, data structures, and building
                real-world applications with modern technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
