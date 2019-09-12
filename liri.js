console.log("Please wait while Liri fetches your data...");
// initial setup 
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
const axios = require('axios');
// ------ variables and switch statement with commands ------ // 
var nodeArgs = process.argv;
var command = process.argv[2];
var input = "";  // ----------> handles all node args and joins everything above [2]

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    input = input + "+" + nodeArgs[i];
  } else {
    input += nodeArgs[i];

  }
}

switch ( command ) {
    case "movie-this":
        axios.get("http://www.omdbapi.com/?t=" + input + "&tomatoes=true&apikey=trilogy").then(
            function(response) {
              console.log("\r\n\r\n\r\n");
              console.log("\"" + response.data.Title 
              + "\"\nRelease year: " + response.data.Year 
              + "\nIMDB Rating: " + response.data.Ratings[0].Value
              + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value
              + "\nCountry: " + response.data.Country
              + "\nLanguage: " + response.data.Language
              + "\nPlot: " + response.data.Plot
              + "\nActors: " + response.data.Actors
              );
              console.log("\r\n\r\n");
            })
            .catch(function(error) {
                console.log(error.response.data);
              })
      break;
    
    case "spotify-this-song": // may need JSON.parse();
        spotify.search({ type: 'track', query: input, limit: 1 }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(data.tracks);
          console.log(data.tracks.items[0].album);
          });
      break;

    case "concert-this":
        axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
            function(response) {
              console.log("\r\n\r\n");
              console.log("Next show featuring " + response.data[0].lineup + ":");
            //   response.data[0].datetime moment().format('MMMM Do YYYY, h:mm:ss a');
              console.log("Date: " + response.data[0].datetime );
              console.log("Venue name: " + response.data[0].venue.name);
              console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
              console.log("\r\n");
            })
            .catch(function(error) {
                console.log(error.response.data);
              })
      break; 

    case "do-what-it-says":
      // read the random.txt file .split(",") and read as process.argv[2] and process.argv[3]
      break;
    default:
      // code block
  }

// switch statement cases:
// - concert-this   for Bands In Town api (uses moment to render concert dates)
// - spotify-this-song --------------- Kind of sort of working
// - movie-this      for OMDB   need more tests & input validation, mostly working
// - do-what-it-says 
