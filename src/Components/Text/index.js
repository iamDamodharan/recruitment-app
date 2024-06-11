import React from "react";
import "../../App.css";

const Text = (props) =>
  [
    "h1",
    "h2",
    "h3",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "label",
    "span",
    "a",
    "b",
  ].indexOf(props?.primitive || "span") > -1 &&
  React.createElement(props.primitive || "span", { ...props }, props.children);

export default Text;
