import "./SearchButtons.css";
import HashtagBar from "@components/Search/HashtagBar/HashtagBar";
import Calendar from "./Calendar/Calendar";

function SearchButtons({  time, setTime, city, setCity, date, setDate, viewCalendar, setViewCalendar, onChange }) {
    return (
      
        <div className="search-container">
            <HashtagBar onChange={onChange} />
        <div className="search-buttons">
          <div className="inline">
            <img
              className="icons"
              src="src/img/icons/schedule-white.png"
              alt="schedule-icons"
            />
            <p>{time.toLocaleTimeString("en-US")}</p>
          </div>
              <div className="inline">
              <img
              className="icons"
              src="src/img/icons/localisation-white.png"
              alt="localisation-icons"
                  />
                  <p>{city}</p>
            </div>
        
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
            <p>{date.toLocaleDateString()}</p>
          </div>
          <Calendar
            viewCalendar={viewCalendar}
            setViewCalendar={setViewCalendar}
            date={date}
            setDate={setDate}
          />
        </div>
    </div>
  );
}

export default SearchButtons;
