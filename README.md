# Weather App

## Overview

The Weather App is a web application built using React.js that allows users to search for the current weather conditions of a specific location. It provides real-time weather information such as temperature, weather description, humidity, wind speed, and more. One of the unique features of this app is that it dynamically changes the background image based on the weather conditions of the searched location.

## Technologies Used

- _React.js:_ The front-end of the application is developed using React.js, a popular JavaScript library for building user interfaces.

- _Axios:_ Axios is used to make HTTP requests to the OpenWeatherMap API to fetch weather data.

- _React Bootstrap:_ The application uses React Bootstrap components for styling and responsiveness.

## Features

1. _Search by Location:_ Users can enter the name of a city or location to search for its current weather conditions.

2. _Dynamic Background:_ The background of the application changes dynamically based on the weather conditions of the searched location. For example, it will display a different background for "Russia" compared to "Malaysia" due to their varying weather.

3. _Real-time Weather Data:_ The app provides real-time weather information, including temperature, weather description, humidity, wind speed, and more.

4. _Error Handling:_ The application handles errors gracefully and displays error messages when a location is not found or when there is an issue with the API.

## Deployment

To deploy this Weather App, follow these steps:

1. _Clone the Repository:_ Clone this GitHub repository to your local machine.

   ```bash
   git clone https://github.com/abdl-azeez/Weather-Monitoring-App.git

   ```

2. _Navigate to the Project Directory:_ Use the cd command to go to the project directory.

   ```bash
   cd weather-app

   ```

3. _Install Dependencies:_ Install the required dependencies using npm

   ```bash
   npm install

   ```

4. _Run the Application:_ Start the development server.

   ```bash
   npm start
   ```

The application will be accessible in your web browser at http://localhost:3000.

5. _Build for Production:_ To build the application for production, run the following command:

   ```bash
   npm run build

   ```

This will create an optimized build of the application in the build directory.
