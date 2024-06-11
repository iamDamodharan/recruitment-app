import React from "react";

const Container = (props) =>
  ["div", "ul", "li", "header", "footer", "section", "artical"].indexOf(
    props?.primitive || "div"
  ) > -1 &&
  React.createElement(props.primitive || "div", { ...props }, props.children);

export default Container;
