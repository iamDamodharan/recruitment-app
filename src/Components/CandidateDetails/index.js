import React, { useEffect, useState } from "react";
import Container from "../Container";
import CandidateTab from "../CandidateTab";
import CandidateInfo from "../CandidateInfo";
import DesignationInfo from "../DesignationInfo";
import EditDetails from "../EditDetails";
import AssignedJobs from "../AssignedJobs";
import Tabs from "../Tabs";
import Text from "../Text";
import { useEditCandidateInfo } from "../../utills";

const CandidateDetails = (props) => {
  const { userDataResult, getUserData, index, setIndex } = props;
  const [showModal, setModal] = useState(false);
  const [activeJobTab, setActiveJobTab] = useState(1);
  const [editInfoResult, editInfo] = useEditCandidateInfo();

  useEffect(() => {
    editInfoResult?.isSuccess && getUserData(index);
  }, [editInfoResult]);

  const jobstab = [
    {
      id: "all_details",
      name: "all_details",
      label: "All Details",
      component: (
        <Container>
          <Text className="text-small">All Details</Text>
        </Container>
      ),
    },
    {
      id: "assigned_jobs",
      name: "assigned_jobs",
      label: "Assigned Jobs",
      component: <AssignedJobs {...userDataResult} />,
    },
    {
      id: "releated_emails",
      name: "releated_emails",
      label: "Related Emails",
      component: (
        <Container>
          <Text className="text-small">Related Emails</Text>
        </Container>
      ),
    },
    {
      id: "cadidate_questions",
      name: "cadidate_questions",
      label: "Cadidate Questions",
      component: (
        <Container>
          <Text className="text-small">Candidate Questions</Text>
        </Container>
      ),
    },
    {
      id: "hotlists",
      name: "hotlists",
      label: "Hotlists",
      component: (
        <Container>
          <Text className="text-small">Hotlists</Text>
        </Container>
      ),
    },
    {
      id: "related_deals",
      name: "related_deals",
      label: "Related Deals",
      component: (
        <Container>
          <Text className="text-small">Related Deals</Text>
        </Container>
      ),
    },
    {
      id: "contacts_pitches",
      name: "contacts_pitches",
      label: "Contact Pitches",
      component: (
        <Container>
          <Text className="text-small">Contact Pitches</Text>
        </Container>
      ),
    },
  ];

  return (
    <Container className="w-notfull flex-column overflow-hidden">
      <CandidateTab {...userDataResult} index={index} setIndex={setIndex} />
      <CandidateInfo {...userDataResult} onEdit={setModal} />
      <DesignationInfo {...userDataResult} />
      <EditDetails
        show={showModal}
        onClose={setModal}
        editInfo={editInfo}
        editInfoResult={editInfoResult}
        {...userDataResult}
      />
      <Tabs
        list={jobstab}
        selected={activeJobTab}
        onTabChange={setActiveJobTab}
      />
    </Container>
  );
};

export default CandidateDetails;
