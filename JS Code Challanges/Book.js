class Book {
  totalCopies = 0;
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.totalCopies += numCopies;
  }

  get availability() {
    return this.getAvailability();
  }
  getAvailability = () => {
    if (this.totalCopies === 0) {
      return "Out of stock";
    } else if (this.totalCopies < 10) {
      return "low stock";
    } else {
      return "in stock";
    }
  };

  sell = (numCopiesSold = 1) => {
    this.totalCopies -= numCopiesSold;
  };

  reStock = (numCopiesStocked = 5) => {
    this.totalCopies += numCopiesStocked;
  };
}

const testBook = new Book("test", "testAuthor", "ISBN123", 12);
console.log(testBook.availability);
testBook.sell(10);
console.log(testBook.availability);
testBook.reStock(100);
console.log(testBook.availability);
console.log(testBook.totalCopies);
