/* eslint-disable react/jsx-props-no-spreading */

import "./AddMatchPage.css";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import ModalCalendar from "@components/Calendar/ModalCalendar";
import TimerPicker from "@components/TimerPicker";
import CityPicker from "@components/CityPicker";
import CalendarPicker from "@components/Calendar/CalendarPicker";
import CloseButton from "@assets/CloseButton";
import { MatchListContext } from "../data/MatchListContext";
import MatchCardsInfos from "../data/MatchCardsInfos";
import { AdminInfos } from "../data/PlayersInfos";

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
          <button type="button" className="button back" onClick={handleBack}>
            Back
          </button>
        )}
      </div>
    </StepContent>
  );
}

export function CityStepper({ city, setCity }) {
  return (
    <div className="stepper">
      <CityPicker city={city} setCity={setCity} />
    </div>
  );
}

export function DateStepper({ setViewCalendar, date, time, setTime }) {
  return (
    <div className="stepper">
      <CalendarPicker date={date} setViewCalendar={setViewCalendar} />
      <TimerPicker time={time} setTime={setTime} />
    </div>
  );
}

export function MatchTypeStepper({ register }) {
  return (
    <div className="stepper">
      <div className="inline">
        <img
          className="icons"
          src="src/img/icons/players-left-white.png"
          alt="clock-icons"
        />
        <div className="select-dropdown borders-styled">
          <select className="select" {...register("versus")}>
            <option value="1vs1">1vs1</option>
            <option value="3vs3">3vs3</option>
            <option value="5vs5">5vs5</option>
          </select>
        </div>
      </div>
      <div className="inline">
        <img
          className="icons"
          src="src/img/icons/field-white.png"
          alt="field-icons"
        />
        <div className="select-dropdown borders-styled">
          <select className="select" {...register("groundType")}>
            <option value="Inside">Inside</option>
            <option value="Outside">Outside</option>
          </select>
        </div>
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
  const [city, setCity] = useState("NEW-YORK");

  const { refresh, setRefresh } = useContext(MatchListContext);

  const onSubmit = (data) => {
    const output = {
      ...data,
      team1: [],
      team2: [],
    };

    const player = {
      id: null,
      name: null,
      age: null,
      from: null,
      avatar: null,
      isOpen: true,
    };

    output.id = MatchCardsInfos.length + 2;
    output.date = date.toLocaleDateString("en-US");
    output.time = time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    output.city = city;
    const NumberOfPlayers = Number(output.versus.slice(0, 1));

    for (let x = 0; x < NumberOfPlayers; x += 1) {
      output.team1.push(player);
      output.team2.push(player);
    }
    output.playersLeft = NumberOfPlayers * 2;
    output.maxPlayers = NumberOfPlayers * 2;

    output.team1[0] = AdminInfos;
    output.admin = AdminInfos.name;
    MatchCardsInfos.push(output);
    setTimeout(() => {
      setViewAddMatch();
      viewMatch(output.id);
      setRefresh(!refresh);
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
    <section className="modal-background">
      <form
        className="modal-container background-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CloseButton onClick={onClose} />
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
                {index === 0 && <CityStepper city={city} setCity={setCity} />}
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
            <p>YOUR MATCH IS READY</p>
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
