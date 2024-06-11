import React from "react";
import Container from "../Container";
import Text from "../Text";
import BoxIcon from "../BoxIcon";

const Activity = () => {
  const activitieslist = [
    {
      id: "activity1",
      type: "Note",
      action: "To Do",
      associations: 1,
      activityby: "John Doe",
      activitydate: "Jul 12, 2023, 11:54 AM",
      content:
        "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
    },
    {
      id: "activity2",
      type: "Note",
      action: "To Do",
      associations: 1,
      activityby: "John Doe",
      activitydate: "Jul 12, 2023, 11:54 AM",
      content:
        "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
    },
    {
      id: "activity3",
      type: "Note",
      action: "To Do",
      associations: 1,
      activityby: "John Doe",
      activitydate: "Jul 12, 2023, 11:54 AM",
      content:
        "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
    },
  ];
  return (
    <Container className="flex-column gap padding-m bg-gray-300 overflow-hidden overflow-y-auto">
      {activitieslist?.map((a) => (
        <Container key={a.id} className="card flex-column gap">
          <Container className="flex-row gap align-center">
            <Container className="flex align-center justify-center icon-button-filled-mini">
              <BoxIcon className="bx bxs-note bx-xxs" />
            </Container>
            <Text primitive="b" className="text-small blue-700">
              {a.type}
            </Text>
            <Text className="text-small gray-capsule">{a.action}</Text>
          </Container>
          <Container>
            <Text primitive="p" className="text-small">
              {a.content}
            </Text>
          </Container>
          <Text primitive="b" className="text-small blue-700">
            {`${a.associations} Association(s)`}
          </Text>
          <Container className="flex-row justify-between">
            <Container className="flex-row align-center gap-sm">
              <BoxIcon className="bx bx-user-circle bx-xs" />
              <Text className="text-small">{a.activityby}</Text>
            </Container>
            <Container className="flex-row align-center gap-sm">
              <BoxIcon className="bx bx-time bx-xs" />
              <Text className="text-small">{a.activitydate}</Text>
            </Container>
          </Container>
        </Container>
      ))}
    </Container>
  );
};

export default Activity;
