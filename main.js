function getTitles(arr) {
  // returns an array of movie titles
  return arr.map(function(el, idx) {
    return  arr[idx].title;
  });
}

function generalAudienceMovies(arr) {
  // returns an array of movies rated 'G'
  return  arr.filter(function (el) {
    return (el.rating === "G");
  });
}

function ninetiesMovies(arr) {
  // returns an array of movies released in the 90s
  return arr.filter(function(el) {
    return (el.releaseYear >= 1990 && el.releaseYear < 2000);
  });
}

function terribleMovies(arr) { 
  // returns an array of movies with freshness scores of 0.10 or less
  return arr.filter(function(el) {
    return (el.freshness <= 0.10);
  });
}

function reformatRuntimes(arr) {
  // returns an array of movie data with the runtimes are in HH:MM format.
  // For example, a movie that's 90 minutes long should have a runtime of '01:30'
  return arr.map(function(el, idx) {
    return arr[idx].runtime;
  });
}

function marathonTime(arr) {
  // returns the cumulative runtime of all movies in the array
  return arr.map(function(el, idx) {
    return arr[idx].runtime;
  }).reduce(function(prev, curr) {
    return prev + curr;
  });
}

function ratingCounts(arr) {
  // returns an object whose keys are movie ratings,
  // and whose values are the number of movies in the array with that rating
}

module.exports = {
  getTitles,
  generalAudienceMovies,
  ninetiesMovies,
  terribleMovies,
  reformatRuntimes,
  marathonTime,
  ratingCounts
}