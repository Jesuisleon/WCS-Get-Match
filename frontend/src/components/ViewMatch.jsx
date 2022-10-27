import "./ViewMatch.css";

const ViewMatch = ({openViewMatch, onClose}) => {
    if (!openViewMatch) return null;
    return (
        <div className ="containOverlay">
          <div className = 'overlay'>
            <p className="closeButton" onClick = {onClose}>X</p>
           </div>
        </div>
    )
}

export default ViewMatch