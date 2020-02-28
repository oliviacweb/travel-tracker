// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// import './css/style.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let travelersData;
let tripsData;

 const fetchTravelersData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers')
    .then(response => response.json())
    .then(travelersData => travelersData.travelers)
    .catch(error => console.log(error))

 const fetchTripsData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips')
    .then(response => response.json())
    .then(tripsData => tripsData.trips)
    .catch(error => console.log(error))



 Promise.all([travelersData, tripsData])
    .then(response => {
      let dataObj = {};
      dataObj.travelersData = response[0];
      dataObj.tripsData = response[1];
      return dataObj
    })
    .catch(error => console.log(error.message));
