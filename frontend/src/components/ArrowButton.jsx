import "./ArrowButton.css"

export default function ArrowButton() {
  return (
      <div className="arrow-button-container">
        <div className="arrow-button">
        <img
            src="src/img/mobile/polygon-button.png"
            alt="polygon-button"
            className="polygon-button"
          />
          <img
            src="src/img/mobile/arrow-logo.png"
            alt="arrow-logo"
            className="arrow-logo"
            />
      </div>
      </div>
    )
}