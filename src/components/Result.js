import React from "react";
import './Result.css';

const Result = (props) => {
  const {
    err,
    date,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    city,
  } = props.weather;

  let content = null;

  const updatedTime = (x) => {
    return(
        new Date(x * 1000).toLocaleTimeString()
    )
  }

  if (!err && city) {
    content = (
      <>
          <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
          <h4>Dane dla dnia i godziny: {date}</h4>
          <h4>Aktualna temperatura: {temp} &#176;C</h4>
          <h4>Wschód słońca dzisiaj o: {updatedTime(sunrise)}</h4>
          <h4>Zachód słońca dzisiaj o: {updatedTime(sunset)}</h4>
          <h4>Aktualna siła wiatru: {wind} m/s</h4>
          <h4>Aktualne ciśnienie {pressure} hPa</h4>
      </>
    );
  }

  return (
    <div className="result">{err ? `Nie mamyw bazie ${city}` : content}</div>
  );
};

export default Result;
