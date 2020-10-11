import React from "react";
import data from "../database/questions.json";

const List = () => {
  return (
    <ul className="list-group">
      {data.map((q) => (
        <div>
          <li className="list-group-item d-flex">
            <span className="mr-auto p-2">{q.title}</span>
            <span class="badge badge-primary badge-pill p-3">14</span>
            <span class="badge p-3">{q.Date}</span>
          </li>
          {/* <li>{q.question}</li> */}
        </div>
      ))}
    </ul>
  );
};

export default List;
