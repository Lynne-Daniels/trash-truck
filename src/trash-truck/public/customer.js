

var createCustomers = function() {
  tomtom.key("mnMk46OLQEfPluQYl5aW9Zw9BdhSltxC");

  var address = document.getElementById("address1").value + ', ' + document.getElementById("city").value + ', ' + document.getElementById("State").value;

  var options = {};
  var call;

  call = tomtom.fuzzySearch(options).query(address);
  call.limit(5);
  call.language("en-US");

  call.go(function(geoResponses) {
      console.log(geoResponses);
      var user = {
      	"firstName": document.getElementById("firstName").value,
      	"lastName": document.getElementById("LastName").value,
      	"streetNameAndNumber": document.getElementById("address1").value,
      	"municipality": document.getElementById("city").value,
      	"postalCode": document.getElementById("zip").value,
      	"coordinates": {
      		"lat": geoResponses[0].position.lat,
      		"long": geoResponses[0].position.lon,
        }
      }
      fetch("http://127.0.0.1:8080/trashdb/customers/", {
          method: 'POST',
          body: JSON.stringify(user),
          credentials: "include",
          headers: {
              'Content-Type': 'application/json',
              "Authorization": "Basic YWRtaW46Y2hhbmdlaXQ="
          }
      })
        .then(function(response) {
          console.log(response);
          return response;
        })
      geoResponses[0].position.lat
  });
}
