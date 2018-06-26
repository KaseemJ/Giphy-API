var topics = ["basketball", "football", "world cup", "baseball", "boxing", "tennis", "golf"];

// Event listener for all button elements
//$("button").on("click", function() {

// In this case, the "this" keyword refers to the button that was clicked
var person = $(this).attr("data-person");

// Constructing a URL to search Giphy for the name

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=i2mGt7k4JmILrm6IzrZyyOPieVxSOHhH&limit=10";

// var APIKey = "i2mGt7k4JmILrm6IzrZyyOPieVxSOHhH";

// This .on("click") function will trigger the AJAX Call
$("#sports-athlete").on("submit", function(event) {

// event.preventDefault() can be used to prevent an event's default behavior.
// Here, it prevents the submit button from trying to submit a form when clicked
event.preventDefault();

// Here we grab the text from the input box
person = $("#sports-input").val();
queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=i2mGt7k4JmILrm6IzrZyyOPieVxSOHhH&limit=10";

// *** figure out the URL for this code ***
//var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";


$.ajax({
  url: queryURL,
  method: "GET"
  })

 // After the data comes back from the API
 .then(function(response) {
  // $("#sports-athlete").text(JSON.stringify(response));
  console.log(response);
// Storing an array of results in the topics variable
 var topics = response.data;

 // Looping over every topic item
 for (var i = 0; i < topics.length; i++) {

// photo ratings
if (topics[i].rating != "g" && topics[i].rating != "pg-13") {

// Creating a div with the class "item"
var gifDiv = $("<div class='item'>");

// Storing the result item's rating
var rating = topics[i].rating;

// Creating a paragraph tag with the result item's rating
var p = $("<p>").text("Rating: " + rating);

//Creating an image tag
var personImage = $("<img>");
// personImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
// personImage.attr("data-still",topics[i].images.fixed_height_small_still.url); // still image
// personImage.attr("data-animate",topics[i].images.fixed_height_small.url); // animated image
// personImage.attr("data-state", "still"); // set the image state
// // Giving the image tag an src attribute of a proprty pulled off the
// // result item
personImage.attr("src", topics[i].images.fixed_height.url);
 // Appending the paragraph and personImage we created to the "gifDiv" div we created
gifDiv.append(p);
gifDiv.append(personImage);

// Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
$("#gifs-appear-here").prepend(gifDiv);

			  }
  		  }
  	  })

   });

$(".sports-search").on("click", function(event) {

// event.preventDefault() can be used to prevent an event's default behavior.
// Here, it prevents the submit button from trying to submit a form when clicked
event.preventDefault();

// Here we grab the text from the input box
person = $(this).attr("data-person");
queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=i2mGt7k4JmILrm6IzrZyyOPieVxSOHhH&limit=10";

// *** figure out the URL for this code ***
//var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";


// $(" img.gif").on("click", function(){ 
//   alert("hello")
// })

// var state = $(this).attr("data-state");
//       // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//       // Then, set the image's data-state to animate
//       // Else set src to the data-still value
//       if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//       } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//       }


$.ajax({
  url: queryURL,
  method: "GET"
  })

 // After the data comes back from the API
 .then(function(response) {
  // $("#sports-athlete").text(JSON.stringify(response));
  console.log(response);
// Storing an array of results in the topics variable
 var topics = response.data;

 // Looping over every topic item
 for (var i = 0; i < topics.length; i++) {

// photo ratings
if (topics[i].rating != "g" && topics[i].rating != "pg-13") {

// Creating a div with the class "item"
var gifDiv = $("<div class='item'>");

// Storing the result item's rating
var rating = topics[i].rating;

// Creating a paragraph tag with the result item's rating
var p = $("<p>").text("Rating: " + rating);

// Creating an image tag
var personImage = $("<img>");

// Giving the image tag an src attribute of a proprty pulled off the
// result item
personImage.attr("src", topics[i].images.fixed_height.url);
 // Appending the paragraph and personImage we created to the "gifDiv" div we created
gifDiv.append(p);
gifDiv.append(personImage);

// Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
$("#gifs-appear-here").prepend(gifDiv);


			  }
  		  }
  	  })

   });


