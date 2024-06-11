import React from "react";
import Container from "../Container";
import Text from "../Text";

const DesignationInfo = (props) => {
  const { data } = props;
  return (
    <Container primitive="section" className="w-full flex-column gap padding-m border-gray-300">
      <Container className="w-full flex-row">
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Current Organization</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.currentOrg}
            </Text>
          </Container>
        </Container>
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Summary</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.summary}
            </Text>
          </Container>
        </Container>
      </Container>
      <Container className="w-full flex-row">
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Skills</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.skills?.length > 1
                ? data?.skills?.join(", ")
                : data?.skills?.join("")}
            </Text>
          </Container>
        </Container>
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Current Employment Status</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.empStatus}
            </Text>
          </Container>
        </Container>
      </Container>
      <Container className="w-full flex-row">
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Available From</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.availableFrom}
            </Text>
          </Container>
        </Container>
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Date of Birth</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.dob}
            </Text>
          </Container>
        </Container>
      </Container>
      <Container className="w-full flex-row">
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Current Salary</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.currentSal}
            </Text>
          </Container>
        </Container>
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Relevent Experience</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.relevantExp}
            </Text>
          </Container>
        </Container>
      </Container>
      <Container className="w-full flex-row">
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Notice Period</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.noticePeriod}
            </Text>
          </Container>
        </Container>
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Salary Expectation</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.expectedSal}
            </Text>
          </Container>
        </Container>
      </Container>
      <Container className="w-full flex-row">
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Full Address</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.fullAddress}
            </Text>
          </Container>
        </Container>
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Status</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.empStatus}
            </Text>
          </Container>
        </Container>
      </Container>
      <Container className="w-full flex-row">
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Resume</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              Resume
            </Text>
          </Container>
        </Container>
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Salary Type</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.salaryType}
            </Text>
          </Container>
        </Container>
      </Container>
      <Container className="w-full flex-row">
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Total Experience</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.totalExp}
            </Text>
          </Container>
        </Container>
        <Container className="w-half">
          <Container className="w-full flex-row">
            <Text primitive="p" className="w-half text-small p-0 m-0">
              <b>Language Skills</b>
            </Text>
            <Text primitive="p" className="w-half text-small p-0 m-0">
              {data?.languages?.length > 0
                ? data?.languages?.join(", ")
                : data?.languages?.join("")}
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default DesignationInfo;
