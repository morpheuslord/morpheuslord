// ComputerModel.jsx
import React, { useEffect } from 'react';
import './computerModel.css';

const ComputerModel = () => {
  useEffect(() => {
    const computerElement = document.querySelector('#computer');
    const rotatey = document.querySelector("#rotatey");
    const rotatex = document.querySelector("#rotatex");

    const rotate = () => {
      let valuey = rotatey.value;
      let valuex = rotatex.value;
      computerElement.style.transform = `rotatex(${valuex}deg) rotatey(${valuey}deg)`;
    };

    rotatey.addEventListener("change", rotate);
    rotatex.addEventListener("change", rotate);

    rotatey.addEventListener("input", rotate);
    rotatex.addEventListener("input", rotate);

    return () => {
      rotatey.removeEventListener("change", rotate);
      rotatex.removeEventListener("change", rotate);

      rotatey.removeEventListener("input", rotate);
      rotatex.removeEventListener("input", rotate);
    };
  }, []);

  return (
    <>
      <div className="computer" id="computer">
        <div className="screen">
          <div className="front square"></div>
          <div className="back square"></div>
          <div className="top square"></div>
          <div className="left square">
            <div className="progressbar"></div>
          </div>
          <div className="right square">
            <div className="intake"></div>
            <div className="intake"></div>
            <div className="intake"></div>
            <div className="intake"></div>
            <div className="intake"></div>
            <div className="intake"></div>
            <div className="intake"></div>
            <div className="intake"></div>
            <div className="intake"></div>
            <div className="intake"></div>
          </div>
          <div className="left1 square"></div>
          <div className="back1 square"></div>
          <div className="front1 square"></div>
          <div className="bottom1 square"></div>
          <div className="top1 square"></div>
        </div>
        <div className="screenbottom">
          <div className="front2 square"></div>
          <div className="top2 square"></div>
          <div className="left2 square">
            <div className="brownpart">
              <div className="disc"></div>
            </div>
          </div>
          <div className="right2 square"></div>
          <div className="back2 square"></div>
          <div className="bottom2 square"></div>
        </div>
        <div className="screenbottombottom">
          <div className="front3 square"></div>
          <div className="left3 square"></div>
          <div className="right3 square"></div>
          <div className="bottom3 square"></div>
          <div className="back3 square"></div>
        </div>
        <div className="keyboard">
          <div className="front4 square"></div>
          <div className="back4 square"></div>
          <div className="top4 square"></div>
          <div className="left4 square"></div>
          <div className="right4 square"></div>
          <div className="bottom4 square"></div>
        </div>
        <div className="keyboardkeys">
          <div className="front5 square"></div>
          <div className="back5 square"></div>
          <div className="top5 square"></div>
          <div className="left5 square"></div>
          <div className="right5 square"></div>
          <div className="bottom5 square"></div>
        </div>
        <div className="numpad">
          <div className="front6 square"></div>
          <div className="back6 square"></div>
          <div className="top6 square"></div>
          <div className="left6 square"></div>
          <div className="right6 square"></div>
          <div className="bottom6 square"></div>
        </div>
      </div>
      <form className="ui">
        <input type="range" min="-360" max="360" value="45" id="rotatey" />
        <input type="range" min="-360" max="360" value="-30" id="rotatex" />
      </form>
    </>
  );
};

export default ComputerModel;
