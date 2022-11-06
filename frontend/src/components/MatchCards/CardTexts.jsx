export function CardTextElements({ value, color, icons }) {
  return (
    <div className="inline">
      <img className="icons" src={icons} alt={value} />
      <p className={color}>{value}</p>
    </div>
  );
}

export default CardTextElements;
