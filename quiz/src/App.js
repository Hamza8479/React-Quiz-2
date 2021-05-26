import "./App.css";
import React, { useState } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

function App() {
  const [state, setState] = useState({
    info: "Write some text Here and see content will change dynamically",
  });
  const clickHandler = () => {
    setState({
      info: "",
    });
  };
  const changeInfo = (event) => {
    setState({
      info: event.target.value,
    });
  };
  const style = {
    width: "400px",
  };
  const deleteCharList = (index) => {
    const inputText = state.info.split("");
    inputText.splice(index, 1);
    const updatedText = inputText.join("");
    setState({
      info: updatedText,
    });
  };
  const charList = state.info.split("").map((ch, index) => {
    return (
      <Char
        character={ch}
        key={index}
        clicked={() => {
          deleteCharList(index);
        }}
      />
    );
  });
  return (
    <div className="App">
      <input
        style={style}
        type="text"
        onChange={changeInfo}
        value={state.info}
        onClick={clickHandler}
      />
      <p>{state.info.length}</p>
      <Validation inputLength={state.info.length} />
      {charList}
    </div>
  );
}

export default App;
