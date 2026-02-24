function Education() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-purple-50 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#635599] mb-12 text-center md:text-left">
            Education
          </h1>

          <div className="space-y-8">
            {/* School */}
            <div className="bg-white border border-purple-100 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#635895]">
                Jawahar Navodaya Vidyalaya, Nashik
              </h2>

              <p className="text-gray-600 mt-2 text-base md:text-lg">
                6th to 12th • CBSE Board
              </p>

              <p className="text-sm text-purple-600 mt-2">
                Completed secondary and higher secondary education with strong
                academic foundation.
              </p>
            </div>

            {/* College */}
            <div className="bg-white border border-purple-100 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#635895]">
                Dr. D. Y. Patil Institute of Technology, Pune
              </h2>

              <p className="text-gray-600 mt-2 text-base md:text-lg">
                B.E. Computer Engineering • Currently 2nd Year
              </p>

              <p className="text-sm text-purple-600 mt-2">
                Focused on software development, data structures, and full-stack
                web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
