# Liri
Liri is a simple node CLI app that uses API requests to Spotify, OMDB, and Bands in town to allow users to search for information on songs, movies, and concerts.

* [Screencast demo](https://drive.google.com/file/d/191I_U8o-iMNz6yOSSfzNw2zwliBaeBGp/view)

## Index
1. How it works
2. Instructions
3. Built with

# How it works
Liri uses two commands to make requests to one of three APIs, then once the response is returned, pulls relevant information from the JSON response. Future updates will return error messages and utilize inquirer for user input.

# Instructions
### setup
FIRST! You'll need to fork this repo and clone it to your computer; from that directory, you'll need to run 
```sh
npm install
``` 
to install the packages and dependencies, and you'll need to create an app with spotify in order to use some of the functionality. Head [here](https://developer.spotify.com/documentation/web-api/) to learn more. Once you have a spotify key and a spotify secret(which are supplied once you create your spotify app), save them as the 'keys' variable as shown in the liri.js file. Done? Nice work!

### use
THEN! Use node to run the liri.js app:
```sh
$ node liri
```
Then enter a search command; 'spotify-this' for song information, 'movie-this' for movie information, or 'concert-this' for upcoming concerts:
```sh
$ node liri spotify-this
```
Then enter the search term, and hit enter:
```sh
$ node liri concert-this whitney
```
Liri will return details about songs, movies, or upcoming concerts to the command line, and then uses the moment js package and node's fs module to log each search command and search term to a log file with a timestamp.  
 
# Built with
* [Node](https://nodejs.org/en/) - Asynchronous, single-threaded js runtime environment
### npm packages
* [Node Spotify API](https://www.npmjs.com/package/node-spotify-api) - Spotify API requests
* [Axios](https://www.npmjs.com/package/axios) - API requests for OMDB & Bands in town
* [Moment](https://www.npmjs.com/package/moment) - handling dates and times
* [DotEnv](https://www.npmjs.com/package/dotenv) - keys and variable storage 
