type Book = {
  book: string;
  author: string;
  genre: string;
};

export default class BooksWishList {
  private wishlist: Book[];

  constructor(book: Book) {
    this.wishlist = [];
    this.wishlist.push(book);
  }

  addToWishlist(newBook: Book): void {
    this.wishlist.push(newBook);
  }

  showWishlist(): void {
    return console.log(this.wishlist);
  }
}

const wishlist = new BooksWishList({
  book: 'The Road',
  author: 'Cormac McCarthy',
  genre: 'Dystopia',
});

wishlist.addToWishlist({
  book: 'Misery',
  author: 'Stephen King',
  genre: 'Thriller',
});

wishlist.showWishlist();