import React, { useEffect, useState } from "react";
// import ReactDom from "react-dom";
import Container from "../Container";
import InputField from "../TextField";
import RadioInput from "../RadioInput";
import Button from "../Button";
import Text from "../Text";
import BoxIcon from "../BoxIcon";
import { useEditCandidateInfo } from "../../utills";

const EditDetails = (props) => {
  const { show, onClose, data, editInfo, editInfoResult } = props;

  const [formDetails, setFormDetails] = useState({});
  const [formData, setFormData] = useState({});

  const textFieldError = "Enter a valid value";
  const language = [
    "English",
    "Chinese",
    "Hindi",
    "Tamil",
    "Spanish",
    "French",
    "Arabic",
    "Bengali",
    "Russian",
    "Portuguese",
    "Indonesian",
  ];
  const skilllist = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "AngularJS",
    "VueJS",
    "NextJS",
    "Bootstrap",
    "Sass",
    "Webpack",
    "Flutter",
    "Three.js",
    "Tailwind CSS",
    "Bulma",
    "jQuery",
    "Meteor",
    "C",
    "C++",
    ".NET Framework",
    "Java",
    "NodeJS",
    "ExpressJS",
    "Django",
    "Spring Boot",
    "PHP",
    "Flask",
    "Ruby on Rails",
  ];

  useEffect(() => {
    let formValue = {};
    data &&
      Object.keys(data)?.map(
        (d) =>
          (formValue = {
            ...formValue,
            [d]: {
              value: data[d],
              error: false,
            },
          })
      );
    setFormDetails({ ...formValue });
    setFormData(data);
  }, [data]);

  useEffect(() => {
    if (editInfoResult?.isSuccess) {
      setTimeout(() => {
        editInfo();
        onClose(false);
      }, 2000);
    }
    if (editInfoResult?.isError) {
      window.alert("Something went wrong, please try again");
    }
  }, [editInfoResult]);

  const onTextFieldChange = (e) => {
    let formValue = {
      ...formDetails,
    };
    if (e?.target?.type === "search") {
      const existing = formData[e.target.name] || [];
      if (existing?.indexOf(e.target.value) >= 0) {
        window.alert("Already selected");
        formValue = {
          ...formValue,
          [e.target.name]: {
            value: "",
            error: false,
            edited: formValue[e.target.name]["edited"] || false,
          },
        };
      } else {
        existing.push(e.target.value);
        let tempdata = { ...formData, [e.target.name]: existing };
        formValue = {
          ...formValue,
          [e.target.name]: {
            value: "",
            error: false,
            edited: true,
          },
        };
        setFormData(tempdata);
      }
    } else {
      formValue = {
        ...formValue,
        [e.target.name]: {
          value: e.target.value || "",
          error: e.target.value.length <= 0 || false,
          edited: true,
        },
      };
    }
    setFormDetails(formValue);
  };

  const onSubmit = () => {
    const errordata =
      Object.keys(formDetails).filter((d) => formDetails[d].error) || [];
    const tempdata =
      Object.keys(formDetails).filter((d) => formDetails[d].edited) || [];
    console.log(tempdata);
    let prop = { id: formData?.id };
    if (errordata.length > 0) {
      window.alert("Please enter valid entries on input.");
      return;
    }
    if (tempdata.length > 0) {
      tempdata.map(
        (d) =>
          (prop = {
            ...prop,
            [d]:
              ["skills", "languages"].indexOf(d) >= 0
                ? formData[d]
                : formDetails[d].value,
          })
      );
      editInfo(prop.id, prop);
    } else {
      onClose(false);
    }
  };

  if (!show) {
    return null;
  }

  if (editInfoResult?.isLoading) {
    return (
      <Container className="fixed overlay w-full h-full flex align-center justify-center">
        <Container className="overlay-wrapper flex-column align-center justify-center gap">
          <BoxIcon className="bx bx-loader-alt bx-lg bx-spin blue-700" />
          <Text className="text-large">Submitting your data.</Text>
        </Container>
      </Container>
    );
  }

  if (editInfoResult?.isSuccess) {
    return (
      <Container className="fixed overlay w-full h-full flex align-center justify-center">
        <Container className="overlay-wrapper flex-column align-center justify-center gap">
          <BoxIcon className="bx bx-check-circle bx-lg blue-700" />
          <Text className="text-large">Submitted successfully.</Text>
        </Container>
      </Container>
    );
  }

  return (
    <Container className="fixed overlay w-full h-full flex align-center justify-center">
      <Container className="overlay-wrapper flex-column gap">
        <Container className="flex-row align-center gap">
          <BoxIcon className="bx bxs-pencil" />
          <Text
            primitive="b"
            className="text-medium no-margin flex align-cennter gap"
          >
            Edit Details
          </Text>
          <Text className="text-small">{`(${
            formData?.firstname + " " + formData?.lastname
          } - ${formData?.designation})`}</Text>
        </Container>
        <Container className="w-full flex-row gap-xl">
          <Container className="w-half flex-column">
            <InputField
              type="text"
              id="currentOrg"
              name="currentOrg"
              label="Current Organization"
              required
              autoComplete={false}
              disabled
              value={formDetails?.currentOrg?.value || ""}
              error={formDetails?.currentOrg?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
          <Container className="w-half flex-column">
            <InputField
              type="text"
              id="summary"
              name="summary"
              label="Summary"
              required
              autoComplete={false}
              disabled
              value={formDetails?.summary?.value || ""}
              error={formDetails?.summary?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
        </Container>
        <Container className="w-full flex-row">
          <Container className="w-half flex-column">
            <InputField
              type="text"
              id="fullAddress"
              name="fullAddress"
              label="Full Address"
              required
              autoComplete={false}
              disabled
              value={formDetails?.fullAddress?.value || ""}
              error={formDetails?.fullAddress?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
          <Container className="w-half flex-column">
            <RadioInput
              id="empStatus"
              name="empStatus"
              label="Employment Status"
              options={["Employed", "Contract"]}
              value={formDetails?.empStatus?.value || ""}
              error={formDetails?.empStatus?.error || false}
              errorText={"Please select a option"}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
        </Container>
        <Container className="w-full flex-row">
          <Container className="w-half flex-column">
            <InputField
              type="search"
              id="skills"
              list="skill"
              name="skills"
              label="Skills"
              selectedlist={formData?.skills}
              datalist={skilllist}
              required
              autoComplete={false}
              // value={formDetails?.skills?.value || ""}
              error={formDetails?.skills?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
          <Container className="w-half flex-column">
            <InputField
              type="search"
              id="languages"
              list="language"
              name="languages"
              label="Languages"
              selectedlist={formData?.languages}
              datalist={language}
              required
              autoComplete={false}
              // value={formDetails?.skills?.value || ""}
              error={formDetails?.skills?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
        </Container>
        <Container className="w-full flex-row">
          <Container className="w-half flex-column">
            <InputField
              type="number"
              id="releventExp"
              name="relevantExp"
              label="Relevant Experience"
              required
              autoComplete={false}
              min={0}
              max={formDetails?.totalExp?.value}
              value={formDetails?.relevantExp?.value || 0}
              error={formDetails?.relevantExp?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
          <Container className="w-half flex-column">
            <InputField
              type="number"
              id="totalExp"
              name="totalExp"
              label="Total Experience"
              required
              autoComplete={false}
              min={formDetails?.relevantExp?.value}
              value={formDetails?.totalExp?.value || 0}
              error={formDetails?.totalExp?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
        </Container>
        <Container className="w-full flex-row">
          <Container className="w-half flex-column">
            <InputField
              type="number"
              id="currentSalary"
              name="currentSal"
              label="Current Salary($)"
              required
              autoComplete={false}
              value={formDetails?.currentSal?.value || 0}
              error={formDetails?.currentSal?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
          <Container className="w-half flex-column">
            <InputField
              type="number"
              id="expectedSalary"
              name="expectedSal"
              label="Expected Salary($)"
              required
              autoComplete={false}
              value={formDetails?.expectedSal?.value || 0}
              error={formDetails?.expectedSal?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
        </Container>
        <Container className="w-full flex-row">
          <Container className="w-half flex-column">
            <RadioInput
              id="salaryType"
              name="salaryType"
              label="Salary Type"
              options={["Month", "Annual"]}
              value={formDetails?.salaryType?.value || ""}
              error={formDetails?.salaryType?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
          <Container className="w-half flex-column">
            <InputField
              type="number"
              id="noticePeriod"
              name="noticePeriod"
              label="Notice Period(Days)"
              required
              autoComplete={false}
              min={0}
              value={formDetails?.noticePeriod?.value || 0}
              error={formDetails?.noticePeriod?.error || false}
              errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
        </Container>
        <Container className="w-full flex-row">
          <Container className="w-half flex-column">
            <InputField
              type="date"
              id="availableFrom"
              name="availableFrom"
              label="Available From"
              className="text-small"
              value={formDetails?.availableFrom?.value || "2024-06-01"}
              // value={formDetails?.currentOrg?.value || ""}
              // error={formDetails?.currentOrg?.error || false}
              // errorText={textFieldError}
              onChange={(e) => onTextFieldChange(e)}
            />
          </Container>
          <Container className="w-half flex-column">
            <InputField
              type="text"
              id="resume"
              name="resume"
              label="Resume"
              required
              autoComplete={false}
              disabled
              placeholder="Resume"
              value={"Resume"}
            />
          </Container>
        </Container>
        <Container className="w-full flex-row justify-end gap">
          <Button className="button-small" onClick={() => onClose(false)}>
            Cancel
          </Button>
          <Button
            className="button-small blue-button"
            onClick={() => onSubmit()}
          >
            Submit
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default EditDetails;
