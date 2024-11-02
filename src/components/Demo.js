import React, { useState, useMemo } from "react";
import { findNthPrime } from "./helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]);

  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black ${
        isDarkTheme ? "bg-slate-600" : ""
      }`}
    >
      <div>
        <button onClick={handleTheme}>🔴</button>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>nth PRime: {prime} </h1>
      </div>
    </div>
  );
};

export default Demo;
