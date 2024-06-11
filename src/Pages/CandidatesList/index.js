import React, { useEffect, useState } from "react";
import Container from "../../Components/Container";
import SideBar from "../../Components/Sidebar";
import CandidateDetails from "../../Components/CandidateDetails";
import Header from "../../Components/Header";
import { useGetCadidateById } from "../../utills";
import BoxIcon from "../../Components/BoxIcon";
import Text from "../../Components/Text";
import Button from "../../Components/Button";
import OverlaySidebar from "../../Components/OverlaySidebar";

const CandidateList = () => {
  const [userDataResult, getUserData] = useGetCadidateById();
  const [index, setIndex] = useState(1);
  const [showSidebar, setSidebar] = useState(false);

  useEffect(() => getUserData(index), [index]);

  if (userDataResult?.isLoading) {
    return (
      <Container className="flex-column">
        <Header />
        <Container
          primitive="section"
          className="flex-column align-center relative"
        >
          <BoxIcon className="bx bx-loader-alt bx-lg bx-spin blue-700" />
          <Text className="text-large">Please wait, Getting user data.</Text>
        </Container>
      </Container>
    );
  }

  if (userDataResult?.error) {
    return (
      <Container className="flex-column">
        <Header />
        <Container
          primitive="section"
          className="flex-column align-center relative"
        >
          <BoxIcon className="bx bx-error bx-lg blue-700" />
          <Text className="text-large">Error while fetching data</Text>
          <Button
            className="button-small blue-button"
            onClick={() => getUserData(index)}
          >
            Try Again
          </Button>
        </Container>
      </Container>
    );
  }

  return (
    <Container className="flex-column overflow-hidden">
      <Header />
      {(!userDataResult?.isLoading || !userDataResult?.isError) && (
        <Container primitive="section" className="flex w-full overflow-hidden">
          <CandidateDetails
            userDataResult={userDataResult}
            getUserData={getUserData}
            index={index}
            setIndex={setIndex}
          />
          <SideBar />
          {showSidebar && <OverlaySidebar setSidebar={setSidebar} />}
          <Button
            className="sidebar-button red-button fixed"
            onClick={() => setSidebar(true)}
          >
            <BoxIcon className="bx bx-chevrons-left bx-sm" />
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default CandidateList;
