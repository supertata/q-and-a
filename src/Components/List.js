import React from "react";
import data from "../database/questions.json";

const List = () => {
  return (
    <div>
      <ul>
        {data.map((q) => (
          <div>
            <li>{q.title}</li>
            <li>{q.question}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
