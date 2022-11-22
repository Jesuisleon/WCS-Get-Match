import { useState, useEffect } from "react";

export function Timer({ time, setTime }) {
  const toSetHours = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [amPm, setAmPm] = useState(toSetHours.slice(6, 8));

  function hourTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function convertToMinutes(m) {
    if (m > 45) return 0;
    return (Math.round(m / 15) * 15) % 60;
  }

  function convertToHours(h) {
    if (h > 24) return h - 24;
    return h;
  }

  const minutes = time.getMinutes();
  let hours = Number(toSetHours.slice(0, 2));

  if (minutes > 45) hours += 1;
  if (amPm === "PM") hours += 12;

  const [handleHours, setHandleHours] = useState(
    hourTwoDigits(convertToHours(hours))
  );
  const [handleMinutes, setHandleMinutes] = useState(
    hourTwoDigits(convertToMinutes(minutes))
  );

  useEffect(() => {
    const newTime = new Date(
      `November 16, 2022 ${hourTwoDigits(
        convertToHours(hours)
      )}:${hourTwoDigits(convertToMinutes(minutes))}:00`
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
          defaultValue={handleHours}
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
          defaultValue={handleMinutes}
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
