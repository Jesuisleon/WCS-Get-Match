/* eslint no-lone-blocks: "error" */

import { useEffect } from "react";
import Calendar from "react-calendar";
import "./ModalCalendar.css";

export default function CalendarModal({
  date,
  setDate,
  viewCalendar,
  setViewCalendar,
}) {
  function onCloseCalendar() {
    setViewCalendar(false);
  }

  useEffect(() => {
    onCloseCalendar(false);
  }, [date]);

  if (!viewCalendar) return null;

  return (
    <div
      className="calendar-container"
      onClick={onCloseCalendar}
      onKeyDown={onCloseCalendar}
      role="button"
      tabIndex={0}
    >
      <div
        onClick={onCloseCalendar}
        onKeyDown={onCloseCalendar}
        role="button"
        tabIndex={0}
        className="calendar"
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
        >
          <Calendar
            className="background-container"
            onChange={setDate}
            value={date}
            calendarType="US"
            locale="en"
            minDetail="year"
          />
        </div>
      </div>
    </div>
  );
}
