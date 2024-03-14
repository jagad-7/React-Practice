import React, { useState, useEffect } from "react";

export default function TestEffect() {
  const [timer, setTimer] = useState(0);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Inside UseEffect");
  }, [counter]);

  // setInterval(()=>{
  //     setTimer(timer + 1)
  // }, 1000)

  return (
    <div>
      {console.log("Inside component")}
      <h1>this is useEffect demo</h1>
      <h2>Timer : {timer}</h2>

      <button
        onClick={() => {
          setTimer(timer + 1);
        }}
      >
        Update Timer
      </button>
        <h2>Counter : {counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Update Counter
      </button>

    </div>
  );
}
