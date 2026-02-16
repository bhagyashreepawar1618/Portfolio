//simple component for js projects
import Card from '../../Card';
import Bmi from '../../../../assets/js/Bmi.png';
import Wdashboard from '../../../../assets/js/weatherDashboard.png';
import currency from '../../../../assets/js/Currencyconvertor.png';
import todo from '../../../../assets/js/TodoJs.png';
import tictactoe from '../../../../assets/js/TicTacToe.png';
import stonepaper from '../../../../assets/js/rockpaper.png';
function JavascriptProjects() {
  return (
    <>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Core Javascript Projects
        </h2>
        <center>
          <div
            className="bg-white flex items-center justify-center max-w-[1300px] p-5 gap-5 mx-auto flex-col md:flex-row
"
          >
            <Card
              image={Bmi}
              cardName="BMI Calculator"
              projectInfo="BMI calculator built using core javascript,html5 and css5"
              githublink="https://github.com/bhagyashreepawar1618/BMI_Calculator.git"
            />

            <Card
              image={Wdashboard}
              cardName="Weather Dashboard"
              projectInfo="Weather app using API integration and JavaScript."
              githublink="https://github.com/bhagyashreepawar1618/Weather_Dashboard.git"
            />

            <Card
              image={currency}
              cardName="Currency Convertor"
              projectInfo="Real-time currency converter using APi integration and JavaScript."
              githublink="https://github.com/bhagyashreepawar1618/Currency_Convertor.git"
            />
          </div>

          <div className="bg-white flex items-center justify-center max-w-[1300px] p-5 gap-5 mx-auto flex-col md:flex-row">
            <Card
              image={todo}
              cardName="Todo App"
              projectInfo="Task management app with add and delete features using Javascript (Dom manipulation)."
              githublink="https://github.com/bhagyashreepawar1618/To-Do-List.git"
            />

            <Card
              image={tictactoe}
              cardName="Tic Tac Toe"
              projectInfo="Tic tac toe game using Javascript (Dom manipulation)."
              githublink="https://github.com/bhagyashreepawar1618/Tic_Tac_Toe.git"
            />

            <Card
              image={stonepaper}
              cardName="Rock Paper Scissors"
              projectInfo="A simple game using Javascript (Dom manipulation)."
              githublink="https://github.com/bhagyashreepawar1618/stone_paper_scissor.git"
            />
          </div>
        </center>
      </section>
    </>
  );
}

export default JavascriptProjects;
