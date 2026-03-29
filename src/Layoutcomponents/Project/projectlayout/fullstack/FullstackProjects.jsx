//simple component for fullstack projects
import Card from '../../Card';
import food from '../../../../assets/fullstack/foodmanagement.png';
import incoming from '../../../../assets/incoming.png';
import yt from '../../../../assets/fullstack/newytclone.png';
import aiProject from '../../../../assets/fullstack/aiProject.png';
import golf from '../../../../assets/fullstack/golf.png';
import aiplayground from '../../../../assets/fullstack/aiplayground.png';
function FullstackProjects() {
  return (
    <>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Fullstack Projects
        </h2>
        <center>
          <div className="bg-white flex items-center justify-center max-w-[1300px] p-5 gap-5 mx-auto flex-col md:flex-row">
            {/* fullstack youtube clone app  */}
            <Card
              image={yt}
              cardName="YouTube Clone"
              projectInfo="A full-stack youtube clone  application , Backend integration planned using Node.js and MongoDB."
              githublink="https://github.com/bhagyashreepawar1618/fullstack_yt_clone_app.git"
              liveDemoLink="https://fullstack-yt-clone-app.vercel.app"
            />
            {/* food management project */}
            <Card
              image={food}
              cardName="Food Management "
              projectInfo="A full-stack food management application (frontend completed). Backend integration planned using Node.js and MongoDB."
              githublink="https://github.com/bhagyashreepawar1618/FOOD_MANAGEMENT.git"
              liveDemoLink="https://food-management-alpha.vercel.app"
            />

            <Card
              image={golf}
              cardName="golf charity platform"
              projectInfo="A subscription-based golf platform where users track scores, participate in monthly draws, and win rewards."
              githublink="https://github.com/bhagyashreepawar1618/golf-charity-platform"
              liveDemoLink="https://golf-charity-platform-ochre-six.vercel.app"
            />
          </div>

          <div className="bg-white flex items-center justify-center max-w-[1300px] p-5 gap-5 mx-auto flex-col md:flex-row">
            <Card
              image={aiProject}
              cardName="AI Powered Sustainable Commerce"
              projectInfo="AI powered MERN application that automatically generates product categories, SEO tags etc for eco-commerce platforms."
              githublink="https://github.com/bhagyashreepawar1618/EcoCommerce_AI"
              liveDemoLink="https://eco-commerce-ai.vercel.app"
            />

            <Card
              image={aiplayground}
              cardName="AI Powered mern stack application"
              projectInfo="Incoming (work in Progress)"
              githublink="https://github.com/bhagyashreepawar1618/AI_PLAYGROUND"
              liveDemoLink="#"
            />

            <Card
              image={incoming}
              cardName="Mood Music Recommander"
              projectInfo="A full-stack  application (frontend completed). Backend integration planned using Node.js and MongoDB."
              githublink="https://github.com/bhagyashreepawar1618/Mood_Music_Recommender.git"
            />
          </div>
        </center>
      </section>
    </>
  );
}

export default FullstackProjects;
