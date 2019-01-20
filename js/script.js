var quoteBox = document.getElementById("quote-box");
var loadQuote = document.getElementById("loadQuote");
var body = document.querySelector("body");
var message;


//Array of quotes
var quotes = [
  {
    quote:"There are things our souls want, and mine wants you.", 
    source: "Cassandra Clare", 
    citation: "City of Heavenly Fire",
    year: 2014,
    category: "Fantasy"
  },
  {
    quote:"So, I guess we are who we are for a lot of reasons. And maybe we'll never know most of them.", 
    source: "Stephen Chbosky",
    citation: "The perks of being a wallflower", 
    year: 1999
  },
  {
    quote:"Some old wounds never truly heal, and bleed again at the slightest word.", 
    source: "George R.R. Martin",
    citation: "Game of thrones",
    year: 1996
  },
  {
    quote:"Books are like mirrors: if a fool looks in, you cannot expect a genius to look out.", 
    source: "J.K Rowling"   
  },
  {
    quote:"I bring out the worst in you and you bring out the best in me.", 
    source: "Anna Todd", 
    year: 2014,
    category: "Young Adult"
  },
  {
    quote:"You love me. Real or not real?. I tell him, Real.", 
    source: "Suzanne Collins",
    citation: "Mockingjay",
    year: 2010
  },
  {
    quote:"All grown-ups were once children... but only few of them remember it.", 
    source: "Antoine de Saint-Exupéry",
  }
];

//Get random quote
function getRandomQuote(arr){
  var randomNum = Math.floor(Math.random() * arr.length);   
  return arr[randomNum];  
}

//Print Random Quote
function printQuote(){
  var randomQuote = getRandomQuote(quotes);  
  message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
  if(randomQuote.citation){
    message += '<span class="citation">' + randomQuote.citation + '</span>'; 
  }
  if(randomQuote.year){
    message += '<span class="year">' + randomQuote.year + '</span>';   
  }

 if(randomQuote.category) {
    message += '<span class="category">' + randomQuote.category + '</span>';
  }

  message += '</p>';

  return message;
}

//Generate Random RGB Color
function getRGBColor(){  
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")"; 
}

//Change quote every 3s
setInterval(function(){
  quoteBox.innerHTML = printQuote();
  body.style.backgroundColor = getRGBColor();
}, 8000);

loadQuote.addEventListener("click", function(){
  quoteBox.innerHTML = printQuote();
  body.style.backgroundColor = getRGBColor();
});

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);