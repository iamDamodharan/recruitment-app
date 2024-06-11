import React, { useState } from "react";
import Container from "../Container";
import Button from "../Button";
import Tabs from "../Tabs";
import Activity from "../Activity";
import Text from "../Text";
import BoxIcon from "../BoxIcon";

const SideBar = () => {
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
    <Container className="sidebar w-quart flex-column">
      <Container className="flex-row gap padding-m">
        <Button className="flex align-center justify-center icon-button-filled">
          <BoxIcon className="bx bxs-note bx-xs" />
        </Button>
        <Button className="flex align-center justify-center icon-button-filled">
          <BoxIcon className="bx bxs-phone-call bx-xs" />
        </Button>
        <Button className="flex align-center justify-center icon-button-filled">
          <BoxIcon className="bx bxs-check-circle bx-xs" />
        </Button>
        <Button className="flex align-center justify-center icon-button-filled">
          <BoxIcon className="bx bx-calendar-event bx-xs" />
        </Button>
      </Container>
      <Tabs
        list={notestab}
        selected={activeNoteTab}
        onTabChange={setActiveNoteTab}
      />
    </Container>
  );
};

export default SideBar;
