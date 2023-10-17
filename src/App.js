import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleCLick(symbol) {
    if (code === "") {
      setCode(`${symbol}`);
    } else {
      setCode(`${code}` + `${symbol}`);
    }
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={(e) => handleCLick(e.target.textContent)}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={(e) => handleCLick(e.target.textContent)}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={(e) => handleCLick(e.target.textContent)}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
