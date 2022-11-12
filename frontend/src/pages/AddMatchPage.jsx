/* eslint-disable react/jsx-props-no-spreading */

import "./AddMatchPage.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";

const steps = [
  {
    label: "Choose your City",
    description: `Toulouse Paris Bordeaux Lyon Marseille Strasbourg...`,
  },
  {
    label: "Choose a Date",
    description: "26/10/22 27/10/22 28/10/22 19/10/22....",
  },
  {
    label: "Choose the type of game",
    description: `3vs3 5vs5 1vs1`,
  },
];

export function InputStepper({
  index,
  description,
  handleNext,
  handleBack,
  children,
}) {
  return (
    <StepContent>
      <p>{description}</p>

      {children}
      <div className="button-container">
        {index === steps.length - 1 ? (
          <input className="button submit" type="submit" onClick={handleNext} />
        ) : (
          <button
            type="button"
            className="button next"
            variant="contained"
            onClick={handleNext}
          >
            Next
          </button>
        )}
        {index !== 0 && (
          <button type="button" onClick={handleBack} className="button back">
            Back
          </button>
        )}
      </div>
    </StepContent>
  );
}

export default function VerticalLinearStepper() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.error(data);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <div className="step-container">
                <p>{index + 1}</p>
                <p>{step.label}</p>
              </div>
              <InputStepper
                index={index}
                handleNext={handleNext}
                handleBack={handleBack}
                description={step.description}
              >
                {index === 0 && (
                  <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                )}
              </InputStepper>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <div className="match-ready">
            <p>Your match is ready</p>
          </div>
        )}
      </form>
    </div>
  );
}
