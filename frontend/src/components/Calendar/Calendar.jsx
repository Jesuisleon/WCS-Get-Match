/* eslint no-lone-blocks: "error" */

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

export default function Calendar1({ viewCalendar, setViewCalendar,date ,setDate }) {
  

  function onCloseCalendar() {
    setViewCalendar(false);
  }

  useEffect(() => {
    onCloseCalendar(false);
  }, [date]);

  if (!viewCalendar) return null;

  return (
    <div
      onClick={onCloseCalendar}
      onKeyDown={onCloseCalendar}
      className="calendar-main"
      role="button"
      tabIndex={0}
    >
      <div className="Calendar-close-div" />
      <div
        onClick={onCloseCalendar}
        onKeyDown={onCloseCalendar}
        role="button"
        tabIndex={0}
        className="calendar-section"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          onKeyDown={(e) => {
            e.stopPropagation();
          }}
          role="button"
          tabIndex={0}
          className="calendar-container"
        >
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    </div>
  );
}
