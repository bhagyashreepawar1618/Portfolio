//simple component for react projects
import Card from '../../Card.jsx';
import incoming from '../../../../assets/incoming.png';
import todo from '../../../../assets/react/Todo.png';
import passgenerator from '../../../../assets/react/passgenerator.png';
function ReactProjects() {
  return (
    <>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">React Projects</h2>
        <center>
          <div
            className="bg-white flex items-center justify-center max-w-[1300px] p-5 gap-5 mx-auto flex-col md:flex-row
"
          >
            <Card
              image={todo}
              cardName="Todo App "
              projectInfo="A simple todo application made using react (context APi)"
              githublink="https://github.com/bhagyashreepawar1618/Todo_react.git"
            />

            <Card
              image={passgenerator}
              cardName="Password Generator"
              projectInfo="built using React (Api integration)."
              githublink=""
            />

            <Card
              image={incoming}
              cardName="Currency Convertor"
              projectInfo="Built using react with api integration."
              githublink="https://github.com/bhagyashreepawar1618/currency_React.git"
            />
          </div>
        </center>
      </section>
    </>
  );
}

export default ReactProjects;
