import React from "react";
import "./common.scss";

export default function TextArea({
  placeHolder,
  value,
  onchange,
  onblur,
  error,
  heading,
}) {
  console.log(placeHolder);
  return (
    <div className="textAreaContainer">
      <p className="heading">{heading}</p>
      <textarea placeholder={placeHolder} />
      <span>{error}</span>
    </div>
  );
}
