//exercises: https://gist.github.com/epoch/04ab1bc291a5f3ff79de#file-week1-js-objects-md

var favoriteRecipe = {
  title: 'Mole',
  serves: 2,
  ingredients : ['cinnamon','cumin','cocoa'],
}
console.log(favoriteRecipe.title);
console.log('Serves: ' + favoriteRecipe.serves);
console.log('Ingredients:');
console.log(favoriteRecipe.ingredients[0]);
console.log(favoriteRecipe.ingredients[1]);
console.log(favoriteRecipe.ingredients[2]);


//The reading list

var books = [
    {
    title: 'Hit Refresh',
    author: 'Satya Nadella',
    alreadyRead: true,
  },
    {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    alreadyRead: false,
    }
]

console.log(books[0].title + ' by ' + books[0].author);
console.log(books[1].title + ' by ' + books[1].author);


for (var i = 0; i < books.length ; i++) {
if (books[i].alreadyRead === true) {
  console.log('You have already read ' + books[i].title + ' by ' + books[i].author);
} else {
  console.log('You still need to read ' + books[i].title + ' by ' + books[i].author);
}
}
//The movie database
var favoriteMovie = {
  title: 'Anchorman',
  duration: 104,
  stars: ['Will Ferrell', 'Christina Applegate', 'Paul Rudd', 'Steve Carell'],
}
var movieInfo = function() {
  console.log(favoriteMovie.title + ' lasts for ' + favoriteMovie.duration + ' minutes. Stars: ' + favoriteMovie.stars + '.');
}
movieInfo();
