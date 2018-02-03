# TomTom JavaScript API Examples

## Getting a Location from an Address

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
