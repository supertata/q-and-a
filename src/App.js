import React from "react";
import "./App.css";
import List from "./Components/List";
import AskQuestionsButton from "./Components/AskQuestionButton";

function App() {
  return (
    <div className="App">
      <div className="container">
        <AskQuestionsButton />
        <List />
      </div>
    </div>
  );
}

export default App;
