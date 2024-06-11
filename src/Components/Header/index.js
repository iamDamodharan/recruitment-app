import React, { useState } from "react";
import Logo from "../../images/logo.png";
import Avatar from "../../images/Avatar.png";
import Divider from "../../images/Divider.png";
import Search from "../../images/search.png";
import Container from "../Container";
import Image from "../Image";
import Button from "../Button";
import Text from "../Text";
import InputField from "../TextField";
import BoxIcon from "../BoxIcon";

const Header = () => {
  return (
    <Container
      primitive="header"
      className="flex-row justify-between align-center"
    >
      <Container className="flex-row align-center search-feild">
        <Image alt="Search" className="no-margin" height="24" src={Search} />
        <InputField
          type="text"
          className="no-border"
          placeholder="Search Pipedrive"
        />
      </Container>
      <Image alt="logo" src={Logo} className="no-margin" height="auto" />
      <Container className="flex-row align-center gap">
        <Button className="flex justify-center align-center icon-button-filled blue-button">
          <BoxIcon className="bx bx-plus bx-xs" />
        </Button>
        <Image
          alt="divider"
          src={Divider}
          className="no-margin"
          height="auto"
        />
        <Button className="flex justify-center align-center icon-button-filled white-button">
          <BoxIcon className="bx bx-gift bx-xs" />
        </Button>
        <Button className="flex justify-center align-center icon-button-filled white-button">
          <BoxIcon className="bx bx-envelope bx-xs" />
        </Button>
        <Button className="flex justify-center align-center icon-button-filled white-button">
          <BoxIcon className="bx bx-bell bx-xs" />
        </Button>
        <Container className="flex-row gap">
          <Image alt="avaitar" src={Avatar} className="no-margin" />
          <Container className="flex-column">
            <Text primitive="b" className="text-small">
              Phyllis Yang
            </Text>
            <Text className="text-small text-nowrap">Silicon Links Inc</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Header;
