import React from "react";
import { DARK, LIGHT, setTheme } from "prism-color";
import "./App.styl";

setTheme(DARK);

let i = 0;
function App() {
  return (
    <div className="app">
      <div className="app__demo-box">
        2123
        <span
          className="app__button"
          onClick={() => {
            setTheme(i % 2 ? DARK : LIGHT);
            i++;
          }}
        >
          点击
        </span>
      </div>
    </div>
  );
}

export default App;
