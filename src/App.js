import "./App.css";
import { useState } from "react";
import backgroundImage from "./assets/images/background-pattern-desktop.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconStar from "./assets/images/icon-star.svg";
import Data from "./Data";

function App() {
  const [showIndex, setShowIndex] = useState(null);
  const [show, setShow] = useState(false);
  const handleShowAnsweer = (index) => {
    if (showIndex === index && show === true) {
      setShow(false);
    } else setShow(!show);
    setShowIndex(index);
  };

  return (
    <div className="main-container">
      <div className="container-background-image">
        <img src={backgroundImage} alt="" />
      </div>
      <div className="card-layout">
        <div className="card-container">
          <div className="header">
            <img src={iconStar} alt="" />
            <h1>FAQs</h1>
          </div>
          <ul className="card-content">
            {Data.map((data, index) => (
              <>
                <li key={data.question} className="card-content-q-and-a">
                  <button
                    className="question"
                    onClick={() => {
                      handleShowAnsweer(index);
                    }}
                  >
                    <h2 className="quest-text">{data.question}</h2>

                    {showIndex === index && show === true ? (
                      <img className="minus-icon" src={iconMinus} alt="" />
                    ) : (
                      <img src={iconPlus} alt="" />
                    )}
                  </button>
                  <div
                    className={
                      showIndex === index && show === true
                        ? "showAnswer answer"
                        : "answer"
                    }
                  >
                    {data.answer}
                  </div>
                </li>
                <div className="divider"></div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
