var movies = require('../movies');
var code = require('../main');
var expect = require('chai').expect;

describe('Get Titles', function() {
  it('Returns an array of movie titles', function() {
    expect(code.getTitles(movies)[0]).to.equal("Wayne's World");
    expect(code.getTitles(movies)[10]).to.equal("Jaws");
  });
});

describe('General Audience Movies', function() {
  it('Should return an array of movies rated G', function() {
    expect(code.generalAudienceMovies(movies)[0].rating).to.equal("G");
    expect(code.generalAudienceMovies(movies)).to.have.lengthOf(12);
  });
});

describe('Nineties Movies', function() {
  it('Should return an array of movies released in the 90s', function() {
    expect(code.ninetiesMovies(movies)[0].releaseYear).to.be.within(1990,1999);
    expect(code.ninetiesMovies(movies)).to.have.lengthOf(24);
  });
});

describe('Terrible Movies', function() {
  it('Should return an array of movies with freshness less than or equal to 0.10', function() {
    expect(code.terribleMovies(movies)[0].freshness).to.be.at.most(0.1);
    expect(code.terribleMovies(movies)).to.have.lengthOf(6);
  });
});

describe('Reformat Runtimes', function() {
  it('Returns an array of movies with runtimes in HH:MM format', function() {
    expect(code.reformatRuntimes(movies)[80].runtime).to.equal("01:35");
    expect(code.reformatRuntimes(movies)[99].runtime).to.equal("02:00");
  });
});

describe('Marathon Time', function() {
  it('Returns a cumulative runtime of all movies in the array', function() {
    expect(code.marathonTime(movies)).to.equal(12134);
    expect(code.marathonTime(movies.slice(0,50))).to.equal(6475);
  });
});

describe('Rating Counts', function() {
  it('Returns an object with ratings data', function() {
    expect(code.ratingCounts(movies)).to.deep.equal({G: 12, NR: 1, PG: 23, "PG-13": 30, R: 34});
    expect(code.ratingCounts(movies.slice(0,50))).to.deep.equal({G: 10, PG: 16, "PG-13": 17, R: 7});
  });
});