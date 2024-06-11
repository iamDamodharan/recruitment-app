import React, { useState } from "react";
import Text from "../Text";
import Container from "../Container";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Container>
      <Text primitive="label" className="switch">
        <input
          type="checkbox"
          checked={toggle}
          onChange={() => setToggle(!toggle)}
        />
        <Text className="slider round" />
      </Text>
    </Container>
  );
};

export default ToggleButton;
