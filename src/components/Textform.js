import React, { useState } from "react";

export default function Textform() {
  const [text, setText] = useState("Enter the value");
  const ClickHandler = () => {
    let newvalue = text;
    setText(newvalue.toUpperCase());
  };
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  const secondhandler = () => {
    let newvalue = text;
    setText(newvalue.toLowerCase());
  };
  return (
    <>
      <div className="container my-5">
        <h5>Enter the text to analyse</h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={changeHandler}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={ClickHandler}>
          Convert the UpperCase
        </button>
        <button className="btn  btn-primary mx-2" onClick={secondhandler}>
          Convert the LowerCase
        </button>
        <p>
          {text.split(" ").length}
          <code> Words</code> {text.length} <code>characters</code>
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
