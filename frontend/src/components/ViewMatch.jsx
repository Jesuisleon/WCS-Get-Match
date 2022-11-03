import "./ViewMatch.css";

function ViewMatch({ openViewMatch, onClose }) {
  if (!openViewMatch) return null;
  return (
    <div className="containOverlay">
      <div className="overlay">
        <div
          className="closeButton"
          onClick={onClose}
          onKeyDown={onClose}
          role="link"
          tabIndex={0}
        >
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default ViewMatch;
