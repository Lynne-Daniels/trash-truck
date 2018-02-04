var locations = [
    "37.787847,-122.416203",
    "37.790700,-122.409453",
    "37.792845,-122.407136",
    "37.795227,-122.403134",
    "37.795753,-122.407308",
    "37.784180,-122.409157",
    "37.785490,-122.405674"
];

var routeData = null;
var overallRoute = null;
var currentRoute = null;
var currentSegmentIndex = 0;

var startIcon = tomtom.L.icon({iconUrl: '/jssdk-4/images/start.png', iconSize: [30, 30], iconAnchor: [15, 15]});
var endIcon = tomtom.L.icon({iconUrl: '/jssdk-4/images/end.png', iconSize: [30, 30], iconAnchor: [15, 15]});

function addMarkers(feature) {
    var startPoint, endPoint;
    if (feature.geometry.type === 'MultiLineString') {
        startPoint = feature.geometry.coordinates[0][0].reverse(); //get first point from first line
        endPoint = feature.geometry.coordinates.slice(-1)[0].slice(-1)[0].reverse(); //get last point from last line
    } else {
        startPoint = feature.geometry.coordinates[0].reverse();
        endPoint = feature.geometry.coordinates.slice(-1)[0].reverse();
    }
    tomtom.L.marker(startPoint, {icon: startIcon}).addTo(map);
    tomtom.L.marker(endPoint, {icon: endIcon}).addTo(map);
}

var map = tomtom.map("map", {
    key: "mnMk46OLQEfPluQYl5aW9Zw9BdhSltxC"
});

var locationsString = locations.join(":");
var options = {
    computeBestOrder: true
};

tomtom.routing(options).locations(locationsString)
.travelMode('car')
.traffic(true)
.go()
.then(function(routeJson) {
    routeData = routeJson;
    overallRoute = tomtom.L.geoJson(routeJson, {
        onEachFeature: addMarkers,
        style: {color: '#0000ff', opacity: 0.8}
    }).addTo(map);
    map.fitBounds(overallRoute.getBounds(), {padding: [5, 5]});
});

function nextSegment() {
    if (currentSegmentIndex < (locations.length - 1)) {
        if (currentRoute) {
            currentRoute.remove();
        }

        coordinates = routeData.features[0].geometry.coordinates;
        
        startPoint = coordinates[currentSegmentIndex][0].reverse();
        endPoint = coordinates[currentSegmentIndex].slice(-1)[0].reverse();

        if (currentSegmentIndex == 0) {
            startPoint = startPoint.reverse();
        } else if (currentSegmentIndex == (locations.length - 2)) {
            endPoint = endPoint.reverse();
        }

        console.log("startPoint = " + startPoint + ", endPoint = " + endPoint);

        currentSegmentIndex += 1;

        tomtom.routing().locations(startPoint + ":" + endPoint)
        .travelMode('car')
        .traffic(true)
        .go()
        .then(function(routeJson) {
            currentRoute = tomtom.L.geoJson(routeJson, {
                onEachFeature: addMarkers,
                style: {color: '#ff0000', opacity: 0.8}
            }).addTo(map);
            map.fitBounds(currentRoute.getBounds(), {padding: [5, 5]});
        });
    }
}
