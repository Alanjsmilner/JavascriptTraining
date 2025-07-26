/*
    ---
    EXERCISE - Write a constructor for making “Book” objects. 
               We will revisit this in the next project. 
               Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.
    ---
*/

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    const phrase1 = title + " by " + author + ", " + pages + " pages, "
    let phrase2;

    if (read === true) {
        phrase2 = phrase1 + "read"
    } else {
        phrase2 = phrase1 + "not yet read"
    }
    
    return phrase1
  };
}

const theHobbit = new Book("The Hobbit",
                           "J.R.R. Tolkien",
                           295, 
                           false
);

console.log(theHobbit.info())