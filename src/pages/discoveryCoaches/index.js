import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import "./discoveryCoaches.scss";
import { Step, StepLabel } from "@mui/material";
import TextArea from "../../components/common/TextArea";

export default function DiscoveryAndCoaches() {
  const [activeStep, setActiveStep] = useState(0);
  const [currentSection, setCurrentSection] = useState("marketing");
  const data = [
    { step: 1, title: "Target Market" },
    { step: 2, title: "Competition" },
    { step: 3, title: "Target Market" },
    { step: 4, title: "Marketing and Sales Strategy" },
    { step: 5, title: "Market Trends and Opportunitie" },
  ];
  const step = [
    "Target Market",
    "Competition",
    "Target Market",
    "Marketing and Sales Strategy",
    "Market Trends and Opportunitie",
  ];

  const marketing = {
    0: "Target Market",
    1: "Competition",
    2: "Target Market",
    3: "Target Market",
    4: "Marketing and Sales Strategy",
    5: "Market Trends and Opportunitie",
  };

  const renderForm = () => {
    switch (currentSection) {
      case "marketing":
        if (activeStep === 0) {
          return (
            <div>
              <TextArea
                placeHolder="Type here..."
                heading="Who is your target customer? Please describe their demographic profile (age, gender, location, income, etc.)."
              />
              <TextArea
                placeHolder="Type here..."
                heading="What are the key needs and preferences of your target customers?"
              />
            </div>
          );
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="discoveryContainer">
      <div className="stepperWrapper">
        <Stepper activeStep={activeStep} orientation="vertical">
          {step.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ width: "50%" }}>{renderForm()}</div>
        {/* {data.map((item, i) => {
          return (
            <ul className="events">
              <li>
                <time datetime="10:03"></time>
                <span>{item.title}</span>
              </li>
            </ul>
          );
        })} */}
      </div>
    </div>
  );
}
