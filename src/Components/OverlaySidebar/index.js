import React, { useState } from "react";
import Container from "../Container";
import Tabs from "../Tabs";
import Activity from "../Activity";
import Text from "../Text";

const OverlaySidebar = (props) => {
  const { setSidebar } = props;
  const [activeNoteTab, setActiveNoteTab] = useState(0);
  const notestab = [
    {
      id: "all",
      name: "all",
      label: "All",
      component: <Activity />,
    },
    {
      id: "notes_and_call",
      name: "notes_and_call",
      label: "Notes & Calls",
      component: (
        <Container>
          <Text className="text-small">Notes & Calls</Text>
        </Container>
      ),
    },
    {
      id: "Tasks",
      name: "Tasks",
      label: "Tasks",
      component: (
        <Container>
          <Text className="text-small">Tasks</Text>
        </Container>
      ),
    },
    {
      id: "meeting",
      name: "meeting",
      label: "Meeting",
      component: (
        <Container>
          <Text className="text-small">Meeting</Text>
        </Container>
      ),
    },
    {
      id: "files",
      name: "files",
      label: "Files",
      component: (
        <Container>
          <Text className="text-small">Files</Text>
        </Container>
      ),
    },
  ];
  return (
    <Container className="fixed overlay w-full h-full flex align-center justify-end" onClick={() => setSidebar(false)}>
      <Container className="overlay-sidebar-wrapper w-half h-full flex-column gap">
        <Container className="sidebar flex-column">
          <Tabs
            list={notestab}
            selected={activeNoteTab}
            onTabChange={setActiveNoteTab}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default OverlaySidebar;
