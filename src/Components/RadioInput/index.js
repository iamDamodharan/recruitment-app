import React from "react";
import Text from "../Text";
import Container from "../Container";
import Button from "../Button";

const RadioInput = (props) => {
  const { id, label, name, options, value, onChange } = props;
  return (
    <Container>
      <Text className="text-small">{label}</Text>
      <Container id={id} className="flex-row">
        {options?.map((option) => (
          <Button
            key={option}
            name={name}
            value={option}
            className={`radio-button ${value === option && " radio-selected blue-button"}`}
            onClick={(e) => onChange(e)}
          >
            {option}
          </Button>
        ))}
      </Container>
    </Container>
  );
};

export default RadioInput;
