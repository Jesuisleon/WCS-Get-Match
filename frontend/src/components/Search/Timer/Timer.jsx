export default function Timer({ time }) {
  return (
    <div className="inline">
      <img
        className="icons"
        src="src/img/icons/schedule-white.png"
        alt="schedule-icons"
      />
      <p className="borders-styled">
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
}
