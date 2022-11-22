import { useState } from "react";

export function City({ city, setCity }) {
  const [defaultCity] = useState(city);

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="inline">
      <img
        className="icons search-icons"
        src="src/img/icons/map-white.png"
        alt="map-icons"
      />
      <div className="borders-styled">
        <select className="select" value={city} onChange={handleChange}>
          <option value={defaultCity}>{defaultCity}</option>
          <option value="BOSTON">BOSTON</option>
          <option value="CHICAGO">CHICAGO</option>
        </select>
      </div>
    </div>
  );
}

export default City;
