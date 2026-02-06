//simple component for fullstack projects
import Card from '../../Card';
import food from '../../../../assets/fullstack/foodmanagement.png';
import incoming from '../../../../assets/incoming.png';
function FullstackProjects() {
  return (
    <>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Fullstack Projects
        </h2>
        <center>
          <div
            className="bg-white flex items-center justify-center max-w-[1300px] p-5 gap-5 mx-auto flex-col md:flex-row
"
          >
            {/* food management project */}
            <Card
              image={food}
              cardName="Food Management "
              projectInfo="A full-stack food management application (frontend completed). Backend integration planned using Node.js and MongoDB."
            />

            {/* music recommander project */}
            <Card
              image={incoming}
              cardName="Mood Music Recommander"
              projectInfo="A full-stack  application (frontend completed). Backend integration planned using Node.js and MongoDB."
            />

            {/* full stack social media clone  */}
            <Card
              image={incoming}
              cardName="Social Media web App"
              projectInfo="A full-stack  social media app clone built using react and Appwrite."
            />
          </div>
        </center>
      </section>
    </>
  );
}

export default FullstackProjects;
