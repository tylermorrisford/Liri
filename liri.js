console.log("This liri app is going to be badass");
// initial setup 
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
const axios = require('axios');

var command = process.argv[2];
var input = process.argv[3];

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
    
    case "spotify-this-song":
      // code block
      break;

    case "concert-this":
        axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
            function(response) {
              console.log("The movie's rating is: " + response.data.imdbRating);
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


// use a switch statement to take in command = process.argv[2]
// and jump to that command using process.argv[3] as an argument

// switch statement cases:
// - concert-this   for Bands In Town api (uses moment to render concert dates)
// - spotify-this-song
// - movie-this      for OMDB   need more tests & input validation, mostly working
// - do-what-it-says 
