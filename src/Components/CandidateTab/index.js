import React from "react";
import Container from "../Container";
import Text from "../Text";
import Button from "../Button";
import BoxIcon from "../BoxIcon";

const CandidateTab = (props) => {
  const { index, setIndex } = props;
  return (
    <Container className="flex-row align-center justify-between padding-m bg-gray-300 border-gray-300">
      <Container className="flex align-center gap">
        <Text primitive="b" className="text-small blue-700">
          {"Candidates"}
        </Text>
        <BoxIcon className="bx bx-chevron-right bx-xs" />
        <Text primitive="b" className="text-small">
          Robert Hardy
        </Text>
        <Text className="text-small gray-capsule">{`ID - ${index}`}</Text>
      </Container>
      <Container className="flex gap">
        <Button className="button-small">Request Profile Update</Button>
        <Button
          className="button-small"
          onClick={() => setIndex(index === 1 ? index : index - 1)}
        >
          Previous
        </Button>
        <Button
          className="button-small"
          onClick={() => setIndex(index === 99 ? index : index + 1)}
        >
          Next
        </Button>
      </Container>
    </Container>
  );
};

export default CandidateTab;
