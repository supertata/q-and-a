import React, { useState } from "react";

const AskQuestionButton = () => {
  const handleClick = (e) => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-secondary m-3"
      >
        Ask a question
      </button>
      {open && (
        <form className="m-4 w-50 p-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <br></br>
            <label for="exampleInputEmail1">
              Be specific and imagine you’re asking a question to another person
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Body</label>
            <br></br>
            <label for="exampleInputPassword1">
              Include all the information someone would need to answer your
              question
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default AskQuestionButton;
