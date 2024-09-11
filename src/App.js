import "./App.css";
import backgroundImage from "./assets/images/background-pattern-desktop.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconStar from "./assets/images/icon-star.svg";

function App() {
  return (
    <div className="main-container">
      <div className="container-background-image">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="card-layout">
        <div className="card-container">
          <div className="header">
            <img src={iconStar} alt="minus star" />
            <h1>FAQs</h1>
          </div>
          <div className="card-content">
            <div className="card-content-q-and-a">
              <div className="question">
                <h3>What is Frontend Mentor, and how will it help me?</h3>
                <img src={iconMinus} alt="minus icon" />
              </div>
              <div className="answer">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It’s suitable for all levels and
                ideal for portfolio building.
              </div>
            </div>
            <div className="divider"></div>
            <div className="card-content-q-and-a">
              <div className="question">
                <h3>Is Frontend Mentor free?</h3>
                <img src={iconPlus} alt="plus icon" />
              </div>
              <div className="answer">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It’s suitable for all levels and
                ideal for portfolio building.
              </div>
            </div>
            <div className="divider"></div>
            <div className="card-content-q-and-a">
              <div className="question">
                <h3>Can I use Frontend Mentor projects in my portfolio?</h3>
                <img src={iconPlus} alt="plus icon" />
              </div>
              <div className="answer">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It’s suitable for all levels and
                ideal for portfolio building.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
