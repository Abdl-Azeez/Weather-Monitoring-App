import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import "./assets/style.css";
import SearchBar from "./components/SearchBar";
import Clear from "./assets/images/weather-images/clear.png";
import Clouds from "./assets/images/weather-images/clouds.png";
import Drizzle from "./assets/images/weather-images/drizzle.png";
import Humidity from "./assets/images/weather-images/humidity.png";
import Mist from "./assets/images/weather-images/mist.png";
import Rain from "./assets/images/weather-images/rain.png";
import Snow from "./assets/images/weather-images/snow.png";
import Wind from "./assets/images/weather-images/wind.png";

// A functional component for the WeatherCard
const WeatherCard = () => {
    const [info, setInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [location, setLocation] = useState("Kuala Lumpur");

    // Define OpenWeatherMap API key and base URL
    const API_KEY = "c8a528f5637999685f0e446a3dcafa9a";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

    // Function to handle location search
    const handleSearchLocation = async (event) => {
        try {
            // Make an Axios GET request to fetch weather data
            const response = await axios.get(
                `${BASE_URL}?q=${location}&units=imperial&appid=${API_KEY}`
            );
            // Update state with weather data and clear error message
            setInfo(response.data);
            setErrorMessage(null);
        } catch (error) {
            // Handle errors and set error message
            handleError(error);
        }
    };

    // Fetch initial weather data on component mount
    useEffect(() => {
        if (location) {
            handleSearchLocation()
        }
        // Clear the location input
        setLocation("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Function to handle and set error messages
    const handleError = (error) => {
        let errorMessage = "An error occurred while fetching data.";
        if (error.response) {
            errorMessage = `${error.response.data.cod}: ${error.response.data.message}`;
        } else if (error.request) {
            errorMessage = "No response received from the server.";
        }
        setErrorMessage(errorMessage);
    };

    // Clear error message when component mounts or location changes
    useEffect(() => {
        setErrorMessage(null);
    }, []);


    // Map weather conditions to corresponding icons
    const weatherIcons = {
        Clear,
        Clouds,
        Drizzle,
        Humidity,
        Mist,
        Rain,
        Snow,
        Wind,
    };

    // Render the WeatherCard component
    return (
        <div
            className={`d-flex flex-column wrapper justify-content-evenly ${info.main?.temp < 50 ? 'coldWeather' : 'cloudyWeather'}`}
        >
            {/* Display error message if present */}
            {errorMessage && (
                <Alert variant="danger" className="text-capitalize" dismissible>
                    {errorMessage}
                </Alert>
            )}
            {/* Render the SearchBar component */}
            <SearchBar
                location={location}
                setLocation={setLocation}
                handleSearchLocation={handleSearchLocation}
            />
            {/* Display weather information */}
            <div className="container d-flex flex-column justify-content-between position-relative">
                <div className="weatherInfo text-center">
                    <div className="location">
                        <p>{info.name}</p>
                    </div>
                    <div className="fw-bold temperature pt-0 position-relative d-flex align-items-center flex-column">
                        {info.weather && (
                            <img
                                className="img-fluid img"
                                style={{ width: "100px" }}
                                src={weatherIcons[info?.weather[0]?.main]}
                                alt={info?.weather[0]?.main}
                            />
                        )}
                        {info.main ? (
                            <h1 style={{ fontSize: "6rem" }}>{info.main.temp.toFixed()}°F</h1>
                        ) : null}
                        <div className="description position-relative">
                            {info.weather ? <p>{info.weather[0].main}</p> : null}
                        </div>
                    </div>
                </div>
                {/* Display additional weather information */}
                {info.name !== undefined && (
                    <div className="d-flex justify-content-evenly text-center w-100 card flex-row weather-bottom">
                        <div>
                            {info.main ? (
                                <p className="fw-bolder">{info.main.humidity}%</p>
                            ) : null}
                            <p>Humidity</p>
                        </div>
                        <div>
                            {info.wind ? (
                                <p className="fw-bolder">{info.wind.speed.toFixed()} MPH</p>
                            ) : null}
                            <p>Wind Speed</p>
                        </div>
                        <div>
                            {info.main ? (
                                <p className="fw-bolder">{info.main.feels_like.toFixed()}°F</p>
                            ) : null}
                            <p>Feels Like</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherCard;
