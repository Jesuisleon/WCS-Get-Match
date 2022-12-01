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
        src="/img/icons/calendar-white.png"
        alt="calendar-icons"
      />
      <div className="borders-styled borders-calendar">
        <p className="select">{date.toLocaleDateString("en-US")}</p>
      </div>
    </div>
  );
}
