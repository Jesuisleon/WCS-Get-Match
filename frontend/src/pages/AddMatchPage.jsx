/* eslint-disable react/jsx-props-no-spreading */

import "./AddMatchPage.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import ModalCalendar from "@components/Search/ModalCalendar";
import MatchCardsInfos from "../data/MatchCardsInfos";

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
      <div className="inline adress-input">
        <input
          placeholder="Enter the adress"
          type="text"
          {...register("adress")}
        />
      </div>
    </div>
  );
}

export function DateStepper({ setViewCalendar, date, time, setTime }) {
  const handleChange = (e) => {
    const hours = e.target.value.split(":")[0];
    const minutes = e.target.value.split(":")[1];
    const newTime = new Date(`November 16, 2022 ${hours}:${minutes}:00`);
    setTime(newTime);
  };

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
        <input
          type="time"
          defaultValue={time.toLocaleTimeString("fr", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          placeholder={time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          onChange={handleChange}
        />
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

export default function VerticalLinearStepper({
  viewAddMatch,
  setViewAddMatch,
  viewMatch,
  onClose,
}) {
  if (!viewAddMatch) return null;

  const { register, handleSubmit } = useForm();

  const [viewCalendar, setViewCalendar] = useState(false);
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const onSubmit = (data) => {
    const output = {
      ...data,
      playersLeft: 10,
      team1: [
        {
          id: null,
          name: null,
          age: null,
          from: null,
          avatar: null,
          isOpen: true,
        },
        {
          id: null,
          name: null,
          age: null,
          from: null,
          avatar: null,
          isOpen: true,
        },
        {
          id: null,
          name: null,
          age: null,
          from: null,
          avatar: null,
          isOpen: true,
        },
      ],
      team2: [
        {
          id: null,
          name: null,
          age: null,
          from: null,
          avatar: null,
          isOpen: true,
        },
        {
          id: null,
          name: null,
          age: null,
          from: null,
          avatar: null,
          isOpen: true,
        },
        {
          id: null,
          name: null,
          age: null,
          from: null,
          avatar: null,
          isOpen: true,
        },
      ],
    };
    output.date = date.toLocaleDateString("en-US");
    output.time = time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    output.id = MatchCardsInfos.length + 2;
    if (output.versus === "1vs1") output.maxPlayers = 2;
    if (output.versus === "3vs3") output.maxPlayers = 6;
    if (output.versus === "5vs5") output.maxPlayers = 10;
    MatchCardsInfos.push(output);
    setTimeout(() => {
      setViewAddMatch();
      viewMatch(output.id);
    }, 1000);
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section className="add-match-page">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div
          className="close"
          onClick={onClose}
          onKeyDown={onClose}
          role="link"
          tabIndex={0}
        >
          X
        </div>
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
                    setTime={setTime}
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
      <ModalCalendar
        viewCalendar={viewCalendar}
        setViewCalendar={setViewCalendar}
        date={date}
        setDate={setDate}
      />
    </section>
  );
}
