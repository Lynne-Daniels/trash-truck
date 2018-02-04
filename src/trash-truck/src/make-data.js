const jQuery = require('jQuery');
const https = require('https');
const fs = require('fs');

// NW corner 37.804748, -122.513918
// NE corner 37.809754, -122.388967
// SE corner 37.720760, -122.358762
// SW corner 37.692975, -122.509884

// returns an array of location objects {lat: , long: } inside a square geofence
// num is number of records - will break if to high due to rate limits at tomtom.  10 seems ok, 50 is not ok
// n is largest latitude
// s is smallest latitude
// w is smallest longitude
// e is largest longitude (in USA longitude is a negative number)

let generateCoordinates = (num, n, s, w, e) => {
  let output = [];
  for (let i = 0; i < num; i++) {
    let newLocation = {};
    newLocation.lat = Math.random() * (n - s) + s;
    newLocation.long = Math.random() * (e - w) + w;
    output.push(newLocation);
  }
  return output;
};

// looks up each coordinate pair on TomTom, and if a valid streeet address is found, creates a customer object.
// input array of coordinate objects, return array of customer objects
let getAddresses = (coordinates, cb) => {
  // look up address via TomTom api
  for (let i = 0; i < coordinates.length; i++) {
    let coords = coordinates[i].lat + ',' + coordinates[i].long;
    let url = 'https://api.tomtom.com/search/2/reverseGeocode/' + coords + '.JSON?key=wVQCnElFZfE3LXhJ29epgzpGbKq0dLGV';
    console.log(url);
    https.get(url, res =>{
      res.setEncoding('utf8');
      let body = '';
      res.on('data', data => {
        body += data;
      });
      res.on('end', ()=> {
        console.log(body);
        body = JSON.parse(body);
        // validate that customer.addresses[0].address.streetNameAndNumber exists
        if (body.addresses[0].address.streetNameAndNumber) {
        // if so, push to array
          cb({
            firstName: 'Fake' + i,
            lastName: 'Name' + i,
            streetNameAndNumber: body.addresses[0].address.streetNameAndNumber,
            municipality: body.addresses[0].address.municipality,
            postalCode: body.addresses[0].address.postalCode,
            coordinates: coordinates[i]
          });
        }
      });
    }); // end get request
  }

  return 'all done';
};

let data = generateCoordinates(10, 37.809, 37.693, -122.358, -122.510);

getAddresses(data, (newCustomer) => {
  fs.appendFile('customer.txt', JSON.stringify(newCustomer) + ',', function (err) {
    if (err) {
      console.log ('error: ', err);
    } else {
      console.log('i might have written something');
    }
  });
});
