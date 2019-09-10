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
        axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=trilogy").then(
            function(response) {
                // console.log("---------------Response---------------");
                // console.log(response);
                // console.log("---------------Response.Data---------------");
                // console.log(response.data);
                // console.log("---------------Data---------------");
                console.log(response.data);
              console.log("\"" + response.data.Title 
              + "\"\nrelease year: " + response.data.Year 
              + "\nIMDB Rating: " + response.data.imdbRating
              + "\nRotten Tomatoes Rating: " + response.data.tomatoRating
              + "\nCountry: " + response.data.Country
              + "\nLanguage: " + response.data.Language
              + "\nActors: " + response.data.Actors
              );
            })
            .catch(function(error) {
              if (error.response) {
                console.log(error.response);
              } 
              console.log(error.config);
            });

      break;
    case y:
      // code block
      break;
    default:
      // code block
  }


// use a switch statement to take in command = process.argv[2]
// and jump to that command using process.argv[3] as an argument

// switch statement cases:
// - concert-this   for Bands In Town api (uses moment to render concert dates)
// - spotify-this-song
// - movie-this      for OMDB
// - do-what-it-says 
