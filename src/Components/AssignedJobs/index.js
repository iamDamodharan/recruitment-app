import React from "react";
import Container from "../Container";
import Text from "../Text";
import Button from "../Button";
import ToggleButton from "../ToggleButton";

const AssignedJobs = (props) => {
  const { data } = props;

  const assignedjobs = [
    {
      id: "job1",
      jobrole: "Senior Product Manager",
      assignorg: "Recruit CRM",
      name: data?.firstname + " " + data?.lastname,
      date: "Jul 10, 2023",
      assigned: true,
      enabled: true,
    },
    {
      id: "job2",
      jobrole: "Senior Product Manager",
      assignorg: "Recruit CRM",
      name: data?.firstname + " " + data?.lastname,
      date: "Jul 10, 2023",
      assigned: true,
      enabled: true,
    },
    {
      id: "job3",
      jobrole: "Senior Product Manager",
      assignorg: "Recruit CRM",
      name: data?.firstname + " " + data?.lastname,
      date: "Jul 10, 2023",
      assigned: true,
      enabled: true,
    },
  ];
  return (
    <Container className="w-full flex-column gap padding-m border-gray-300">
      <Container className="flex-row justify-between align-center">
        <Text className="text-small">
          <b>{`Assigned Job to ${data?.firstname} ${data?.lastname}`}</b>
        </Text>
        <Container className="flex-row gap">
          <Button className="button-small blue-button">Assigned To Job</Button>
          <Button className="button-small">View All Assigned Jobs</Button>
        </Container>
      </Container>
      <Container className="flex-column align-center gap">
        {assignedjobs?.map((j) => (
          <Container
            key={j.id}
            className="assigned-job flex-row align-center justify-between w-full"
          >
            <Container className="flex-row gap">
              <Container className="letter-icon flex align-center justify-center">
                M
              </Container>
              <Container className="flex-column">
                <Text className="text-small">
                  <b>{j.jobrole}</b>
                </Text>
                <Text className="text-small">{j.assignorg}</Text>
              </Container>
            </Container>
            <Container className="flex-column">
              <Text className="text-small">{j.name}</Text>
              <Text className="text-small">{j.date}</Text>
            </Container>
            <Container>
              <Text className="text-small gray-capsule">Assigned</Text>
            </Container>
            <Button className="button-small">View Files</Button>
            <ToggleButton />
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default AssignedJobs;
