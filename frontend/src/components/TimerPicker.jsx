import { useState, useEffect } from "react";

export function Timer({ time, setTime }) {
  const toSetHours = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [amPm, setAmPm] = useState(toSetHours.slice(6, 8));
  const [handleHours, setHandleHours] = useState(toSetHours.slice(0, 2));
  const [handleMinutes, setHandleMinutes] = useState(
    (Math.round(toSetHours.slice(3, 5) / 15) * 15) % 60
  );

  useEffect(() => {
    let hours = Number(handleHours);

    if (amPm === "PM") {
      hours += 12;
    }

    function minTwoDigits(n) {
      return (n < 10 ? "0" : "") + n;
    }
    const newTime = new Date(
      `November 16, 2022 ${minTwoDigits(hours)}:${handleMinutes}:00`
    );
    setTime(newTime);
  }, [amPm, handleHours, handleMinutes]);

  return (
    <div className="inline ">
      <img
        className="icons"
        src="src/img/icons/clock-white.png"
        alt="clock-icons"
      />
      <div className="select-dropdown borders-styled">
        <select
          className="select"
          aria-label="hours"
          defaultValue={toSetHours.slice(0, 2)}
          onChange={(e) => setHandleHours(e.target.value)}
        >
          <option value="00">00</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span>:</span>
        <select
          className="select"
          aria-label="minutes"
          defaultValue={(Math.round(toSetHours.slice(3, 5) / 15) * 15) % 60}
          onChange={(e) => setHandleMinutes(e.target.value)}
        >
          <option value="0">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
        <span>:</span>
        <select
          className="select"
          aria-label="amp-pm"
          defaultValue={toSetHours.slice(6, 8)}
          onChange={(e) => setAmPm(e.target.value)}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
}

export default Timer;
