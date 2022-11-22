import "./CloseButton.css";

export default function CloseFunction({ onClick }) {
  return (
    <span onClick={onClick} onKeyDown={onClick} role="link" tabIndex={0}>
      <img
        className="close-button"
        src="src/img/icons/close-white.png"
        alt="close-button"
      />
    </span>
  );
}
