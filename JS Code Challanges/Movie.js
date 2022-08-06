function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function () {
  return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
};

const bramhastra = new Movie(
  "Bramhastra",
  "Aayan Mukharjee",
  "Mythology",
  2022,
  9.5
);
console.log(bramhastra.getOverview());
