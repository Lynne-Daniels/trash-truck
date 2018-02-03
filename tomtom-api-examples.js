// Consumer API Key	wVQCnElFZfE3LXhJ29epgzpGbKq0dLGV

// Fuzzy Search
// https://api.tomtom.com/search/2/search/pizza%kentfield%ca.JSON?key=wVQCnElFZfE3LXhJ29epgzpGbKq0dLGV

// Geocode Request
// https://api.tomtom.com/search/2/structuredGeocode.JSON?key=wVQCnElFZfE3LXhJ29epgzpGbKq0dLGV&countryCode=US&streetNumber=8&streetName=Woodland%20Pl&municipality=Kentfield&postalCode=94904
// brings back wrong address over correct.  Will need to filter results where street name contains street name;

// Calc route - up to 50 colon separated points in order or 20 if best route is to be calculated.

// https://api.tomtom.com/routing/1/calculateRoute/52.50931,13.42936:52.50274,13.43872?key=wVQCnElFZfE3LXhJ29epgzpGbKq0dLGV

// can add [&computeBestOrder=<boolean>] for example some random lat/longs in SF...
// 37.787847,-122.416203:37.790700,-122.409453:37.792845,-122.407136:37.795227,-122.403134:37.795753, -122.407308:37.784180,-122.409157:37.785490,-122.405674

// https://api.tomtom.com/routing/1/calculateRoute/37.787847,-122.416203:37.790700,-122.409453:37.792845,-122.407136:37.795227,-122.403134:37.795753,-122.407308:37.784180,-122.409157:37.785490,-122.405674?key=wVQCnElFZfE3LXhJ29epgzpGbKq0dLGV&computeBestOrder=true

// map

// https://api.tomtom.com/map/2/tile/hybrid/main/15/37.784180/-122.409157.pbf?key=wVQCnElFZfE3LXhJ29epgzpGbKq0dLGV

// reordered optimized waypoints are at end of xml file
/*

From accelerate.im/events/18

Smart Cities: on-demand garbage collection
Traditional garbage collection happens every week by trucks driving by all the houses in a specific area and check which people are putting out their garbage containers. On demand garbage collection could make garbage collection more efficient, faster and more cost efficient. People can register on demand when they want their garbage to be picked up by submitting their address. The TomTom Online Search APIs can help to translate those addresses to coordinates. Every day the garbage collection trucks can make use of advanced routing algorithms from the TomTom Online Routing API to calculate the most optimal routes to pick up the garbage for those registered people. Building an on demand garbage collection portal and an application which calculates the most optimal routes for garbage collection trucks are the challenge here! You can use Maps SDKs for Web, Android and iOs in combination with TomTom Online services to create a feature rich product.

Project requirements:

Customers can request pickup by submitting address
TomTom API translates address to coordinates
Garbage truck routes created by Online Routing API
*/
