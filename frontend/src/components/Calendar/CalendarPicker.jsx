export default function Calendar({ date, setViewCalendar }) {
  return (
    <div
      onClick={() => setViewCalendar(true)}
      onKeyDown={() => setViewCalendar(true)}
      role="button"
      tabIndex={0}
      className="inline "
    >
      <img
        className="icons"
        src="src/img/icons/calendar-white.png"
        alt="calendar-icons"
      />
      <p className="borders-styled">{date.toLocaleDateString("en-US")}</p>
    </div>
  );
}
