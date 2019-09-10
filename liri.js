console.log("This liri app is going to be badass");
// initial setup 
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

// use a switch statement to take in command = process.argv[2]
// and jump to that command using process.argv[3] as an argument