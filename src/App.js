import "./App.css";
import { useState } from "react";
import backgroundImage from "./assets/images/background-pattern-desktop.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconStar from "./assets/images/icon-star.svg";
import Data from "./Data";

function App() {
  const [showIndex, setShowIndex] = useState(null);
  const [show, setShow] = useState(false)
  ;
  const handleShowAnsweer = (index) => {
    if((showIndex === index) && (show === true)){
      setShow(false)
    } else setShow(!show)
    setShowIndex(index);
  };

  return (
    <div className="main-container">
      <div className="container-background-image">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="card-layout">
        <div className="card-container">
          <div className="header">
            <img src={iconStar} alt="icon star" />
            <h1>FAQs</h1>
          </div>
          <div className="card-content">
            {Data.map((data, index) => (
              <>
                <div key={data.question} className="card-content-q-and-a">
                  <div className="question">
                    <button className="quest-btn" onClick={()=>{handleShowAnsweer(index)}}><h3>{data.question}</h3></button>
                    <button className="icon-btn"
                      onClick={() => {
                        handleShowAnsweer(index);
                      }}
                    >
                      {(showIndex === index && show===true) ? (
                        <img className="minus-icon" src={iconMinus} alt="minus icon"  />
                      ) : (
                        <img src={iconPlus} alt="plus icon" />
                      )}
                    </button>
                  </div>
                  <div
                    className={
                     ( showIndex === index && show===true )? "showAnswer answer" : "answer"
                    }
                  >
                    {data.answer}
                  </div>
                </div>
                <div className="divider"></div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
