import React from "react";
import "./weather.style.css";

const Weather = (props) => {
  console.log("", props);
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-2">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        <br></br>
        {maxminTemp(props.wind.speed, props.wind.deg, props.description)}
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(speed, deg, desc) {
  if (speed && deg) {
    return (
      <h3>
        <span> Speed </span>
        <span className="px-4">{speed}&deg;</span>
        <span> Deg </span>
        <span className="px-4">{deg}&deg;</span>

        <span> </span>
        <span>{desc.charAt(0).toUpperCase() + desc.slice(1)}</span>
      </h3>
    );
  }
}
