import React from "react";

export default function PlayersData({
  data,
  title,
  classNameAll,
  classNameTitle,
  classNameData,
}) {
  return (
    <div className={classNameAll}>
      <h2 className={classNameTitle}>{title}</h2>
      <p className={classNameData}>{data}</p>
    </div>
  );
}
