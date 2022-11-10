import "./SearchButtons.css";
import Calendar from "./Calendar/Calendar";

const SearchButtons = ({date, setDate, viewCalendar, setViewCalendar}) => {
  return (
    <div className="search-buttons">
    <div className="schedule">
      <img
        className="icons"
        src="src/img/icons/schedule-white.png"
        alt="schedule-icons"
      />
      <p>{date.toLocaleTimeString('en-US')}</p>
          </div>
          
    <div
      onClick={() => setViewCalendar(true)}
      onKeyDown={() => setViewCalendar(true)}
      role="button"
      tabIndex={0}
       className="calendar"
    >
      <img
        className="icons"
        src="src/img/icons/calendar-white.png"
        alt="calendar-icons"
      />
      <p>{date.toLocaleDateString()}</p>
    </div>
    <Calendar
      viewCalendar={viewCalendar}
      setViewCalendar={setViewCalendar}
      date={date}
      setDate={setDate}
    />
  </div>
  )
}

export default SearchButtons