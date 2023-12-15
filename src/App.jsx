import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";
import "./App.css";
import data from "./data";
const App = () => {
  const [index, setIndex] = useState(0);
  const nextPerson = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
  const prevPerson = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const randomPerson = () => {
    setIndex(Math.floor(Math.random() * data.length));
  };
  console.log(index);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "aliceblue",
      }}
    >
      <div className="wholeCard">
        <div className="imageContainer">
          <div className="theDesign">
            <FaQuoteRight className="quote" />
          </div>
          <img src={data[index].image} alt="" />
        </div>
        <p className="name">{data[index].name}</p>
        <p className="job">{data[index].job}</p>
        <p className="bio">{data[index].text}</p>
        <div className="btnContainer">
          <button onClick={prevPerson} className="btn">
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson} className="btn">
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPerson} className="surpriseMe">
          Surprise Me!
        </button>
      </div>
    </div>
  );
};
export default App;
