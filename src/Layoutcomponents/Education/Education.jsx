function Education() {
  return (
    <>
      {/* Education Section */}
      <section className="bg-white px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#635599] mb-8">
            Education
          </h1>

          <div className="space-y-6">
            <div className="bg-purple-50 p-5 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-[#635895]">
                Jawahar Navodaya Vidyalaya, Nashik
              </h2>
              <p className="text-base mt-1">6th to 12th • CBSE Board</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-[#635895]">
                Dr. D. Y. Patil Institute of Technology, Pune
              </h2>
              <p className="text-base mt-1">
                B.E. Computer Engineering • Currently 2nd Year
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
