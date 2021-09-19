import React, { useState, useEffect } from "react";
import "./countries.style.css";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      {countries.map((country) => {
        const { numericCode, name, flag, capital } = country;
        return (
          <article key={numericCode}>
            <div
              className="country-box"
              onClick={() => {
                //console.log(name);
                //                console.log(countryName);
                props.getDetail(name, capital);
              }}
              // onClick={props.loadweather(name, capital)}
            >
              <img src={flag} alt={name} />
              <h2>{name}</h2>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Countries;
