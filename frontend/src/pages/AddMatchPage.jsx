/* eslint-disable react/jsx-props-no-spreading */

import "./AddMatchPage.css";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import ModalCalendar from "@components/Search/Calendar/ModalCalendar";

const steps = [
  {
    label: "Choose your City",
  },
  {
    label: "Choose a Date",
  },
  {
    label: "Choose the type of game",
  },
];

export function InputStepper({ index, handleNext, handleBack, children }) {
  return (
    <StepContent>
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

export function CityStepper({ register }) {
  return (
    <div className="stepper">
      <div className="inline">
        <img
          className="icons"
          src="src/img/icons/localisation-white.png"
          alt="localisation-icons"
        />
        <div className="select-dropdown borders-styled">
          <select className="select" {...register("city")}>
            <option value="NEW-YORK">NEW-YORK</option>
            <option value="BOSTON">BOSTON</option>
            <option value="CHICAGO">CHICAGO</option>
          </select>
        </div>
      </div>
      <div className="inline">
        <input
          placeholder="Enter the adress"
          type="text"
          {...register("adress")}
        />
      </div>
    </div>
  );
}

export function DateStepper({ setViewCalendar, date, time }) {
  return (
    <div className="stepper">
      <div
        onClick={() => setViewCalendar(true)}
        onKeyDown={() => setViewCalendar(true)}
        role="button"
        tabIndex={0}
        className="inline"
      >
        <img
          className="icons"
          src="src/img/icons/calendar-white.png"
          alt="calendar-icons"
        />
        <p className="borders-styled">{date.toLocaleDateString("en-US")}</p>
      </div>
      <div className="inline">
        <img
          className="icons"
          src="src/img/icons/schedule-white.png"
          alt="schedule-icons"
        />
        <p className="borders-styled">
          {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}

export function MatchTypeStepper({ register }) {
  return (
    <div className="stepper">
      <div className="inline">
        <select {...register("versus")}>
          <option value="1vs1">1vs1</option>
          <option value="3vs3">3vs3</option>
          <option value="5vs5">5vs5</option>
        </select>
      </div>
      <div className="inline">
        <select {...register("groundType")}>
          <option value="Inside">Inside</option>
          <option value="Outside">Outside</option>
        </select>
      </div>
    </div>
  );
}

export default function VerticalLinearStepper() {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => console.error(data);

  const [viewCalendar, setViewCalendar] = useState(false);
  const [time] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChangeDate = (newDate) => {
    setDate(newDate);
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
              >
                {index === 0 && <CityStepper register={register} />}
                {index === 1 && (
                  <DateStepper
                    register={register}
                    setViewCalendar={setViewCalendar}
                    date={date}
                    time={time}
                  />
                )}
                {index === 2 && <MatchTypeStepper register={register} />}
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
      <Controller
        control={control}
        name="date"
        defaultValue={date.toLocaleDateString("en-US")}
        render={({ onChange, value }) => (
          <ModalCalendar
            onChange={onChange}
            selected={value}
            viewCalendar={viewCalendar}
            setViewCalendar={setViewCalendar}
            date={date}
            setDate={handleChangeDate}
          />
        )}
      />
    </div>
  );
}
