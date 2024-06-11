import React from "react";
import Container from "../Container";
import Text from "../Text";

const Tabs = (props) => {
  const { list, selected, onTabChange } = props;
  return (
    <Container primitive="section" className="w-full flex-column">
      <Container primitive="ul" className="tab-container flex-row">
        {list?.map((l, ind) => (
          <Container
            key={l.id}
            primitive="li"
            className={`tab ${ind === selected ? "active" : null}`}
            onClick={(e) => {
              onTabChange(ind);
              e.stopPropagation();
            }}
          >
            <Text
              primitive="a"
              className={`text-small ${ind === selected ? "blue-700" : null}`}
            >
              {l.label}
            </Text>
          </Container>
        ))}
      </Container>
      {list?.[selected]?.component}
    </Container>
  );
};

export default Tabs;
