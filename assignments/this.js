 The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* 1. Window/global object binding: when global, "this" is the window/console.
* 2. Implicit Binding: when an function is called with a dot, the object before the dot is "this".
* 3. New binding: When a constructor function is used, "this" refers to the object created by the constructor function
* 4. Explicit binding: When a "call" or "apply" method is used, "this" is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function goodBook(book){
    console.log(this);
    return book;
}

goodBook("Ender's Game")



// Principle 2
// code example for Implicit Binding
const myFavoriteMovie = obj => {
    obj.movies = function(){
        console.log('The best movie ever is ${this.movie}');
        console.log(this);
    };
};

const me = {movie: 'Interstellar'};
const sister = {movie: 'Storks'};
myFavoriteMovie(me);
myFavoriteMovie(sister);



// Principle 3

// code example for New Binding

var newScoot = function(number, lastRenter, age, location){
    this.number = number;
    this.lastRenter = lastRenter;
    this.age = age;
    this.location = location;
  };
  
  var scoot82 = new newScoot("scoot82", "none", "n/a", "37.7782° N, 122.4087° W")
  console.log(scoot82);



// Principle 4

// code example for Explicit Binding

var scoot129 = {
    number: "scoot129",
    lastRenter: "Draymond Green",
    age: 28,
    location: "37.7916° N, 122.4276° W",
    sayLocation: function(){
      console.log(this.location)
    },
    startTime: "11:39am",
    endTime: "12:23pm"
  }
  
  var sayLastTrip = function(){
    console.log(this.lastRenter + " rented " + this.number + " from " + this.startTime + " to " + this.endTime + ".");
  }
  
  sayLastTrip.call(scoot129);