# TomTom JavaScript API Examples

## Getting a Location from an Address

[Functional Example: Search](https://developer.tomtom.com/maps-sdk-web/functional-examples#search)

```javascript
tomtom.key("mnMk46OLQEfPluQYl5aW9Zw9BdhSltxC");

var address = "44 Tehama St, San Francisco, CA";
var options = {};
var call;

call = tomtom.fuzzySearch(options).query(address);
call.limit(5);
call.language("en-US");

call.go(function(geoResponses) {
    …
});
```

Contents of `geoResponses`:

```json
[
  {
    "type": "Point Address",
    "score": 10.85,
    "address": {
      "streetNumber": "44",
      "streetName": "Tehama St",
      "municipalitySubdivision": "San Francisco, Soma",
      "municipality": "San Francisco",
      "countrySecondarySubdivision": "San Francisco",
      "countryTertiarySubdivision": "San Francisco",
      "countrySubdivision": "CA",
      "postalCode": "94105",
      "extendedPostalCode": "941053184",
      "countryCode": "US",
      "country": "United States Of America",
      "countryCodeISO3": "USA",
      "freeformAddress": "44 Tehama St, San Francisco, CA 94105",
      "countrySubdivisionName": "California"
    },
    "position": {
      "lat": 37.7876,
      "lon": -122.39663
    },
    "viewport": {
      "topLeftPoint": {
        "lat": 37.7885,
        "lon": -122.39777
      },
      "btmRightPoint": {
        "lat": 37.7867,
        "lon": -122.39549
      }
    },
    "entryPoints": [
      {
        "type": "main",
        "position": {
          "lat": 37.78737,
          "lon": -122.39641
        }
      }
    ]
  }
]
```

## Computing Best Route for a List of Locations

[Functional Example: Routing](https://developer.tomtom.com/maps-sdk-web/functional-examples#routing)
[API Documentation: routing()](https://api.tomtom.com/maps-sdk-js/4.19.5/documentation/classes/tomtom.html#method_routing)

```javascript
tomtom.key("mnMk46OLQEfPluQYl5aW9Zw9BdhSltxC");

// colon separated string of lat/long coordinates
var locations = "37.787847,-122.416203:37.790700,-122.409453:" +
                "37.792845,-122.407136:37.795227,-122.403134:" +
                "37.795753,-122.407308:37.784180,-122.409157:" +
                "37.785490,-122.405674";
var call;

call = tomtom.routing().locations(locations);
call.travelMode('car');
call.traffic(true);

call.go().then(function(route) {
    …
});
```

Contents of `route`:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "MultiLineString",
        "coordinates": [
          [[-122.41628, 37.78824], [-122.41683, 37.78817], [-122.41847, 37.78797], … ],
          [[-122.40951, 37.79101], [-122.40967, 37.79099], [-122.41025, 37.79093], … ],
          [[-122.40729, 37.79282], [-122.40732, 37.79297], [-122.40737, 37.79323], … ],
          [[-122.40326, 37.79521], [-122.40323, 37.79507], [-122.40314, 37.79467], … ],
          [[-122.40742, 37.79574], [-122.40737, 37.79547], [-122.40729, 37.79504], … ],
          [[-122.40928, 37.78416], [-122.40913, 37.78343], [-122.40967, 37.78336], … ]
        ]
      },
      "properties": {
        "summary": {
          "lengthInMeters": 7124,
          "travelTimeInSeconds": 2542,
          "trafficDelayInSeconds": 0,
          "departureTime": "2018-02-03T15:24:10-08:00",
          "arrivalTime": "2018-02-03T16:06:31-08:00"
        },
        "sections": [
          {
            "startPointIndex": 0,
            "endPointIndex": 154,
            "sectionType": "TRAVEL_MODE",
            "travelMode": "car"
          }
        ],
        "segmentSummary": [
          {
            "lengthInMeters": 1611,
            "travelTimeInSeconds": 371,
            "trafficDelayInSeconds": 0,
            "departureTime": "2018-02-03T15:24:10-08:00",
            "arrivalTime": "2018-02-03T15:30:20-08:00"
          },
          {
            "lengthInMeters": 1113,
            "travelTimeInSeconds": 387,
            "trafficDelayInSeconds": 0,
            "departureTime": "2018-02-03T15:30:20-08:00",
            "arrivalTime": "2018-02-03T15:36:47-08:00"
          },
          {
            "lengthInMeters": 883,
            "travelTimeInSeconds": 367,
            "trafficDelayInSeconds": 0,
            "departureTime": "2018-02-03T15:36:47-08:00",
            "arrivalTime": "2018-02-03T15:42:54-08:00"
          },
          {
            "lengthInMeters": 971,
            "travelTimeInSeconds": 407,
            "trafficDelayInSeconds": 0,
            "departureTime": "2018-02-03T15:42:54-08:00",
            "arrivalTime": "2018-02-03T15:49:41-08:00"
          },
          {
            "lengthInMeters": 1610,
            "travelTimeInSeconds": 640,
            "trafficDelayInSeconds": 0,
            "departureTime": "2018-02-03T15:49:41-08:00",
            "arrivalTime": "2018-02-03T16:00:21-08:00"
          },
          {
            "lengthInMeters": 936,
            "travelTimeInSeconds": 371,
            "trafficDelayInSeconds": 0,
            "departureTime": "2018-02-03T16:00:21-08:00",
            "arrivalTime": "2018-02-03T16:06:31-08:00"
          }
        ]
      }
    }
  ]
}
```
