import "./App.css";
import { Fragment, useState } from "react";
import backgroundImage from "./assets/images/background-pattern-desktop.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconStar from "./assets/images/icon-star.svg";
import Data from "./Data";

function App() {
  const [showIndex, setShowIndex] = useState(null);
  const [show, setShow] = useState(false);

  const handleShowAnsweer = (index) => {
    if (showIndex === index && show) {
      setShow(false);
    } else {
      setShow(!show);
      setShowIndex(index);
    }
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
              <Fragment key={data.question}>
                <li className="card-content-q-and-a">
                  <h2 className="quest-text">
                    <button
                      aria-expanded={
                        showIndex === index && show ? "true" : "false"
                      }
                      aria-controls={`content-${index}`}
                      className="question"
                      onClick={() => {
                        handleShowAnsweer(index);
                      }}
                    >
                      {data.question}

                      {showIndex === index && show === true ? (
                        <img
                          className="question__icon--minus"
                          src={iconMinus}
                          alt="Collapse"
                        />
                      ) : (
                        <img
                          className="question__icon--plus"
                          src={iconPlus}
                          alt="Expand"
                        />
                      )}
                    </button>
                  </h2>
                  <div
                    id={`content-${index}`}
                    className={`faq_answer ${
                      showIndex === index && show ? "showAnswer" : ""
                    }`}
                  >
                    <p>{data.answer}</p>
                  </div>
                </li>
                <hr className="divider" />
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
