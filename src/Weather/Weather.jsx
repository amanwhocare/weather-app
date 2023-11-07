import React, { useState } from "react";
import "./Weather.css";
import search_icon from "../Assets/search_icon.png";
import wind_icon from "../Assets/wind.png";
import cloudy_icon from "../Assets/cloudy.png"
import clear_icon from "../Assets/clear-sky.png"
import rainy_icon from "../Assets/rainy.png"
import snowy_icon from "../Assets/snowy.png"
import humidity_icon from "../Assets/humidity.png";
import dizzle_icon from "../Assets/drizzle.png"

const Weather = () => {
  let apiKey = "360a008be0fb7339f4c690f7ad2e8a34";

  const [wicon,setwicon] = useState(clear_icon);

  const search = async ()=>{

  const element = document.getElementsByClassName("cityInput");
  if (element[0].value==="") {
    return 0;
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
  let response = await fetch(url);
  let data = await response.json();

  const humidity = document.getElementsByClassName("humidity");
  const wind = document.getElementsByClassName("wind-speed");
  const temp = document.getElementsByClassName("weather_temp");
  const loc = document.getElementsByClassName("weather_loc");

  humidity[0].innerHTML= data.main.humidity+"%";
  wind[0].innerHTML= Math.floor(data.wind.speed)+"km / h";
  temp[0].innerHTML= Math.floor(data.main.temp)+ "°C";
  loc[0].innerHTML=data.name;

  if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n") {
    setwicon(clear_icon);
  }
  else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){setwicon(cloudy_icon);}
  else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){setwicon(dizzle_icon);}
  else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){setwicon(dizzle_icon);}
  else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){setwicon(rainy_icon);}
  else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){setwicon(rainy_icon);}
  else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){setwicon(snowy_icon);}
else{
  setwicon(clear_icon);
}}

  return (
    <div className="container">
      <div className="search-section">
        <input type="text" className="cityInput" placeholder="Enter City Name.." />
        <div onClick={()=>{search()}} className="search_icon">
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather_icon">
        <img src={wicon} alt="" />
      </div>
      <div className="weather_temp">28°C</div>
      <div className="weather_loc">London</div>
      <div className="data_container">
        <div className="element">
          <div className="main-element">
            <img src={humidity_icon} alt="" />
          </div>
          <div className="data">
            <div className="humidity">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <div className="main-element">
            <img src={wind_icon} alt="" />
          </div>
          <div className="data">
            <div className="wind-speed">64km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
