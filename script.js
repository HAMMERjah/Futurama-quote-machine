$(document).ready(function(){
//array filled with all the quotes to cycle through
//each quote is 2part array [quote, author]
var quotes= [
  ["If, for any reason you're not satisfied, I hate you.", "7-11 Clerk"],
  ["Good news, everyone!", "Professor Farnsworth"],
  ["I don't want to live on this planet anymore.", "Professor Farnsworth"],
  ["There's no scientific consensus that life is important.", "Professor Farnsworth"],
  ["You raised my hopes and dashed them quite expertly, Sir!", 'Tinny Tim'],
  ["You know what the worst part about being a slave is? They make you do all this work, but they never pay you or let you go.", 'Philip J Fry'],
  ["Have you ever tried simply turning off the TV, sitting down with your children, and hitting them?", 'Bender'],
  ["The alien mothership! If we hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.", 'Zapp Brannigan'],
  ["WINDMILLS DO NOT WORK THAT WAY! GOODNIGHT!", 'Morbo'],
  ["I, am the man with no name: Zapp Brannigan.", 'Zapp Brannigan'],
  ["I'm Scruffy. The Janitor.", 'Scruffy. The Janitor.'],
  ["You must smoke peace pipe, and you must do it peacefully. Or we’ll kill you.", 'Chief Singing Wind'],
  ["You’ve gone from crazy like a fox to crazy like Fox News!", 'Amy Wong'],
  ["Oh my god! I’m a millionaire! Suddenly, I have an opinion on the capital gains tax!", 'Turanga Leela'],
  ["Good news, everyone! I’ve taught the toaster to feel love.", 'Professor Farnsworth'],
  ["Hooray! A happy ending for the rich people", 'John Zoidberg, MD.'],
  ["Bender, that was an amazing three hour washboard solo. The parts when I was awake blew my mind!", 'Beck'],
  ["Dear Horse God, I know I don’t usually pray to you. Sometimes I doubt you even exist, but if you’re willing to grant me luck…please…stomp your hoof once!", 'Philip J Fry'],
  ["If rubbin’ frozen dirt in your crotch is wrong, hey I don’t wanna be right.", 'Free Waterfall Sr.'],
  ["Pathetic human race. Arranging their knowledge by category just made it easier to absorb. Dewey, you fool! Your decimal system has played right into my hands! Ha ha ha ha!", 'Chief Giant Brain'],
  ["It’s like a party in my mouth and everybody’s throwing up!", 'Philip J Fry'],
  ["That young man fills me with hope and some other emotions which are weird and deeply confusing.", 'Zapp Brannigan'],
  ["Ah, computer dating. It’s like pimping, but you rarely have to use the phrase ‘upside your head.", 'Bender'],
  ["Now, like all great plans, my strategy is so simple an idiot could have devised it. On my command all ships will line up and file directly into the alien death cannons, clogging them with wreckage.", 'Zapp Brannigan'],
  ["All I want is to be a monkey of moderate intelligence who wears a suit… that’s why I’m transferring to business school!", 'Guenter the Monkey'],
  ["I’m going to build my own theme park! With blackjack! And hookers! You know what - forget the park!", 'Bender'],
];

//array filled with character pictures
var pics = [
  'http://res.cloudinary.com/hammerjah/image/upload/v1468953671/futurama/Philip_Fry_nkpyt1.png', //fry
  'http://res.cloudinary.com/hammerjah/image/upload/v1468953698/futurama/latest_o3bfza.png', //zoidberg
  'http://res.cloudinary.com/hammerjah/image/upload/v1468953686/futurama/Bender_Rodriguez_fmnifu.png', //bender

'http://vignette2.wikia.nocookie.net/en.futurama/images/7/7e/CubertFarnsworth.png/revision/latest?cb=20130330070342', //cubert
  
'http://vignette1.wikia.nocookie.net/en.futurama/images/e/e9/Zapp_Brannigan.png/revision/latest?cb=20101013084300', //zapp
  
'http://tvfiles.alphacoders.com/144/characterart-14.png', //mom
 
'http://tvfiles.alphacoders.com/133/characterart-13.png', //kif
  
'http://tvfiles.alphacoders.com/122/characterart-12.png', //nibbler 
  
 'http://tvfiles.alphacoders.com/999/characterart-9.png', //amy
  
 'http://tvfiles.alphacoders.com/333/characterart-3.png' //prof  
];
  
//initialize vars  
var quoteNum;
var picNum;
var quoteToUse;
var picToUse;
var currentQuote;
var currentAuthor;
var currentPic;
var tweetToUse;

//random quote function
function randomQuote(){
  //make RNG b/w 0-quotes.length
  quoteNum= Math.floor(Math.random() * quotes.length);
  quoteToUse=quotes[quoteNum];
  //array[0]= quote, array[1]= author
  currentQuote=quoteToUse[0];
  currentAuthor="\-- " + quoteToUse[1];
  $(".quoteText").text(currentQuote);
  $(".quoteAuthor").text(currentAuthor);
};
//random picture function
function randomPic(){
  //make RNG b/w 0-pics.length
  picNum= Math.floor(Math.random() * pics.length);
  picToUse= pics[picNum];
  currentPic= picToUse;
  $(".characters").attr( "src",currentPic);
};

$(".btn-info").click(function(){
  tweetToUse= currentQuote;
  var link= 'https://twitter.com/intent/tweet?text='+ tweetToUse;
  $("#twitterLink").attr('href',link);
});

$(".btn-next").click(function(){
  randomQuote();
  randomPic();
});
//call randomQuote()+ randomPic() on page load
randomQuote();
randomPic();
});
