export default function Calendar({ date, setViewCalendar }) {
  return (
    <div
      onClick={() => setViewCalendar(true)}
      onKeyDown={() => setViewCalendar(true)}
      role="button"
      tabIndex={0}
      className="inline"
    >
      <img
        className="icons search-icons"
        src="src/img/icons/calendar-white.png"
        alt="calendar-icons"
      />
      <div className="borders-styled" style={{ padding: "0.4rem 0" }}>
        <p className="select">{date.toLocaleDateString("en-US")}</p>
      </div>
    </div>
  );
}
