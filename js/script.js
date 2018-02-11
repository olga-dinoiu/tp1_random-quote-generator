//creating the array of quotes
var quotes = [
	{
		quote : 'Java is to JavaScript what Car is to Carpet.',
		source: 'Chris Heilmann',
		year: 2005
	},
	{
		quote : "It's the possibility of having a dream come true that makes life interesting.",
		source: 'Paulo Coelho',
		citation: 'The Alchemist',
		year: 1988
	},
	{
		quote : 'Most men would rather deny a hard truth than face it.',
		source: 'George R.R. Martin',
		citation: 'A Game of Thrones',
		year: 1996
	},
	{
		quote : 'One of the keys to happiness is a bad memory.',
		source: 'Rita Mae Brown'
	},
	{
		quote : 'You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.',
		source: 'Roy T. Bennett'

	},
	{
		quote : 'The man who moves a mountain begins by carrying away small stones.',
		source: 'Confucius',
		citation: 'The Analects'
	},
]
//creating a function wich returns an object chosen randomly from the 'quotes' array
function getRandomQuote() {
	//creating a variable wich provides a random number between 0 and 5
	var counter = Math.floor(Math.random() * 6);
	return quotes[counter];
};

function printQuote() {
	//saving generated object by getRandomQuote function in the randomQuote variable 
	var randomQuote = getRandomQuote();
	//geting ready the new HTML which will be printed 
	var printedQuote =  '<p class="quote">' + randomQuote['quote'] + '</p>' +
						'<p class="source">' + randomQuote['source'];
	//checking if the quote has a known citation
	if (randomQuote['citation'] !== undefined ) {
		//if yes, adding it to the html which will be printed
		printedQuote += '<span class="citation">'+ randomQuote['citation']+ '</span>' ;
	};
	//checking if the quote has a known year
	if (randomQuote['year'] !== undefined) {
		//if yes, adding it to the html which will be printed
		printedQuote += '<span class="year">' +randomQuote['year'] +'</span>'
	};
	//adding the last part of the html
	printedQuote += '</p>';
	//printing the new random quote
	document.getElementById('quote-box').innerHTML = printedQuote;

}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

