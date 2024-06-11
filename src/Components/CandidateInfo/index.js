import React from "react";
import CandidateAvatar from "../../images/candidate-avatar.png";
import Social from "../../images/social-media.png";
import Container from "../Container";
import Text from "../Text";
import Button from "../Button";
import Image from "../Image";
import BoxIcon from "../BoxIcon";

const CandidateInfo = (props) => {
  const { data, onEdit } = props;
  return (
    <Container primitive="section" className="flex-column">
      <Container
        primitive={"section"}
        className=" w-full flex-row justify-space padding-m border-gray-300"
      >
        <Container className="w-half flex-row align-center gap">
          <Image
            className="avaitar no-margin no-border"
            src={CandidateAvatar}
            height="auto"
          />
          <Container className="flex-column">
            <Container className="flex-row align-center gap">
              <Text className="text-medium">
                <b>{data?.firstname + " " + data?.lastname}</b>
              </Text>
              <Image
                alt="Social Media"
                src={Social}
                className="no-margin"
                style={{ width: "80px" }}
              />
            </Container>
            <Container className="flex-row gap">
              <Text className="text-small">{data?.designation}</Text>
              <Text className="text-small">{data?.country}</Text>
              <Text className="text-small">{data?.state}</Text>
            </Container>
          </Container>
        </Container>
        <Container className="w-half flex-row justify-end gap">
          <Button className="button-small red-button">Contact Linked</Button>
          <Button className="button-small">
            <BoxIcon className="bx bxs-star bx-xs" />
          </Button>
          <Button className="button-small">
            <BoxIcon className="bx bxs-hot bx-xs" />
          </Button>
          <Button className="button-small" onClick={() => onEdit(true)}>
            Edit
          </Button>
          <Button className="button-small">
            <BoxIcon className="bx bx-dots-vertical-rounded bx-xs" />
          </Button>
        </Container>
      </Container>
      <Container className="w-full flex-row justify-space gap padding-m border-gray-300">
        <Container className="w-half flex gap">
          <Container className="flex-row align-center gap-sm">
            <BoxIcon className="bx bx-envelope bx-xs" />
            <Text primitive="b" className="text-small blue-700">
              {data?.email}
            </Text>
          </Container>
          <Container className="flex-row align-center gap-sm">
            <BoxIcon className="bx bx-phone-call bx-xs" />
            <Text primitive="b" className="text-small blue-700">
              {data?.mobile}
            </Text>
          </Container>
        </Container>
        <Container className="w-half flex justify-end gap">
          <Container className="flex-row align-center gap-sm">
            <BoxIcon className="bx bx-user-circle bx-xs" />
            <Text primitive="b" className="text-small">
              {data?.assigneename}
            </Text>
          </Container>
          <Container className="flex-row align-center gap-sm">
            <BoxIcon className="bx bx-time bx-xs" />
            <Text primitive="b" className="text-small">
              {"Jul 14, 2023, 4:04 pm"}
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default CandidateInfo;
