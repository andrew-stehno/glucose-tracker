# Sugar Pin

## About This Project

Sugar Pin is a React App which allows diabetics to track daily blood sugar levels in a convenient app.  Pins are dropped into a graph displaying trends throughout the day.  High and low norms are listed aswell, any levels which are out of these norms will prompt a gentle suggestion.  Users are able to search and edit past data as well.

## Dependencies used

* react
* react-router-dom
* reactstrap
* @devexpress/dx-react-chart
* moment
* moment-timezone
* react-moment
* @auth0/auth0-spa-js
* axios
* express
* if-env
* mongoose
* morgan

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command from the terminal:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

[heroku](https://glucose-tracker-2020.herokuapp.com/)

## Credits

### Andrew Stehno

* Auth0
* Express server setup
* MongoDB/Mongoose setup
* Construct API routes
* Heroku


### Matt Wigdahl

* React DevExpress Charts
* Wireframes
* Construct API data structures for charts
* QA

### Luke Pettit

* Idea conceptualization
* Front end React
* Styling

### Tyler Stewart

* Front end React
* Styling
* Troubleshooting
* QA