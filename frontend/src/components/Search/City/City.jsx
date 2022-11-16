import { useState } from "react";

export default function City({ city, setCity }) {
  const [defaultCity] = useState(city);

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="inline">
      <img
        className="icons"
        src="src/img/icons/localisation-white.png"
        alt="localisation-icons"
      />
      <div className="select-dropdown borders-styled">
        <select className="select" value={city} onChange={handleChange}>
          <option value={defaultCity}>{defaultCity}</option>
          <option value="BOSTON">BOSTON</option>
          <option value="CHICAGO">CHICAGO</option>
        </select>
      </div>
    </div>
  );
}
