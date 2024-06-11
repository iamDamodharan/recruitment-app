import React from "react";

const Image = (props) => <img alt={props?.alt} {...props}>{props.children}</img>;

export default Image;