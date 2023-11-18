import React, { useState } from "react";
import answers from "./answers";
import "./EightBall.css";

function EightBall (props) {

  const [msg, setMsg] = useState("Think of a Question.");
  const [color, setColor] = useState("black");

  function handleClickBall () {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    setMsg(answer.msg);
    setColor(answer.color);
  }

  return (
    <>
      <div className="EightBall" onClick={handleClickBall} style={{backgroundColor: color}}>
        <p class="EightBall-msg">{msg}</p>
      </div>
    </>
  )
}

export default EightBall;