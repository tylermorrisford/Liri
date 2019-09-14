console.log("Please wait while Liri fetches your data...");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require('moment');
const axios = require('axios');
// ------ variables and switch statement with commands ------ // 
var nodeArgs = process.argv;
var command = process.argv[2];
var input = "";  // ---> handles all node args and joins everything above [2]

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

          console.log("\r\n----- " + input + " ------");
          console.log("\r\n\r\n");
          console.log("\"" + data.tracks.items[0].name + "\"");
          console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
          console.log("Spotify Link: " + data.tracks.items[0].album.artists[0].external_urls.spotify);
          console.log("Album name: " + data.tracks.items[0].album.name);
          console.log("\r\n\r\n");
          });
      break;

    case "concert-this":
        axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
            function(response) {
              console.log("\r\n----- " + input + " ------");
              console.log("\r\n\r\n");
              console.log("Next show featuring " + response.data[0].lineup + ":");
              console.log("Date: " + moment(response.data[0].datetime).format('MMMM Do YYYY, h:mm a'));
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
      fs.readFile('./random.txt', (err, data) => {
        if (err) throw err;
        var randomText = data.toString().split(",");
        input = randomText[1].replace(/['"]+/g, '')
        command = randomText[0];
        // this ain't dry
        if ( command === 'movie-this') {
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
        }
        if ( command === 'spotify-this-song') {
            spotify.search({ type: 'track', query: input, limit: 1 }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
    
              console.log("\r\n----- " + input + " ------");
              console.log("\r\n\r\n");
              console.log("\"" + data.tracks.items[0].name + "\"");
              console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
              console.log("Spotify Link: " + data.tracks.items[0].album.artists[0].external_urls.spotify);
              console.log("Album name: " + data.tracks.items[0].album.name);
              console.log("\r\n\r\n");
              });
        }
        if ( command === 'concert-this') {
            axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
            function(response) {
              console.log("\r\n----- " + input + " ------");
              console.log("\r\n\r\n");
              console.log("Next show featuring " + response.data[0].lineup + ":");
              console.log("Date: " + moment(response.data[0].datetime).format('MMMM Do YYYY, h:mm a'));
              console.log("Venue name: " + response.data[0].venue.name);
              console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
              console.log("\r\n");
            })
            .catch(function(error) {
                console.log(error.response.data);
              })
        }
      });
      break;
    default:
        spotify.search({ type: 'track', query: "Sing About Me", limit: 1 }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
          console.log("\r\n\r\n");
          console.log("\"" + data.tracks.items[0].name + "\"");
          console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
          console.log("Spotify Link: " + data.tracks.items[0].album.artists[0].external_urls.spotify);
          console.log("Album name: " + data.tracks.items[0].album.name);
          console.log("\r\n\r\n");
          });
  }

// switch statement cases:
// - do-what-it-says 


// readFile
// if (command === "do-what-it-says") {
//     fs.readFile('./random.txt', (err, data) => {
//         if (err) throw err;
//         var randomText = data.toString().split(",");
//         command = randomText[0];
//         input = randomText[1].replace(/['"]+/g, '');
//       });
// }
