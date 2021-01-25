# Check The Temp App

This App allows the user to search for weather in their area based on zipcode.

## Link to Check-The-Temp 🌤 Repo
- [Check-The-Temp-Repo](https://github.com/MGubernick/check-the-temp)

## Other Important Links & Resources Used:

**Specific Links**
- [openweathermap API](https://openweathermap.org/current#zip)

**Website Resources**
- [WeatherAppChallenge Repo](https://git.generalassemb.ly/mgubernick/react-weather-challenge/blob/master/exercise.md)
- [w3schools](w3schools.com)
- [developer.mozilla](developer.mozilla.org)
- [stackOverflow](stackOverflow.com)

## Planning and Story: Development Process and Problem-Solving Strategy:

### Planning:
- The planning process for this project included reviewing prior atom sessions to plan how I wanted to orginize my React project.
- Thought of a super basic aestetic for the application itself.

### API Prep:
- Researched various 3rd party APIs for weather.
- Found OpenWeatherMap API which is free and pretty easy to use
- Created an account with OpenWeatherMap and tested the API call using Postman.

### App Build:
- Started off by buidling a home componenet that houses the home page for the application
- Created a  AutoDismissAlert component to handle the alerts for the application.
- Built the Header component to house the nav bar and header
- Wrote a ZipCodeForm component to house the zipcode imput form so that the user can enter a zipcode and submit it to the API call
- Wrote a WeatherShow component that handles the functionality of making the API call and handling the response as well as returning the data to the dom for display.

### Everything Else:
- As I worked on my application's functionality, I would take breaks and work a little on my SCSS, react bootstrap and other styling features.  Its nice to see the style develop right along with the application itlself.

## User Stories:

- As a user, I want to navigate from the homepage to the search page

- As a user, I want to enter my zipcode to submit

- As a user, I want to submit zipcode and see the information returned displayed on the screen

## Technologies Used:
- HTML/CSS/SCSS
- Bootstrap/React Bootstrap
- Javascript
- React.js
- Axios
- OpenWeatherMap.org (API)
- Google

## Unsolved Problems:
- The problem that I am currently working on is authentication so that users will be able to sign-up/sign-in/sign-out/change-password
- The next goal for v2 is to add the authentication functionality as well as functionality so that the user can save their favorite zipcodes to the page.
