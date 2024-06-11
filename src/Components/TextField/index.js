import React from "react";
import Text from "../Text";
import Container from "../Container";

const InputField = (props) => {
  const { id, type, label, error, errorText, list, datalist, selectedlist } =
    props;

  if (type === "search") {
    return (
      <Container>
        <Text primitive="label" for={id} />
        <Text className="text-small">{label}</Text>
        <input
          {...props}
          value=""
          className={`text-small ${props?.className}`}
          datalist={null}
          selectedlist={null}
          errorText={null}
        />
        <Container className="w-full flex-row">
          {selectedlist?.map((l) => (
            <Text className="capsule text-xsmall blue-button">{l}</Text>
          ))}
        </Container>
        <datalist id={list}>
          {datalist?.map((d) => (
            <option key={d} value={d} />
          ))}
        </datalist>
      </Container>
    );
  }
  return (
    <Text primitive="label" for={id}>
      <Text className="text-small">{label}</Text>
      <input
        {...props}
        className={`text-small ${props?.className}`}
        datalist={null}
        selectedlist={null}
        errorText={null}
      />
      <Text className="text-small">{error ? errorText : ""}</Text>
    </Text>
  );
};

export default InputField;
