class Author {
    constructor(firstName, lastName, country, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.books = books;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    getBooks() {
        console.log(this.books);
    }
}

class Book {
    constructor(title, genre, pages) {
        this.title = title;
        this.genre = genre;
        this.pages = pages;
    }
}

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('A Storm of Swords', 'Epic Fantasy', 973);

const author1 = new Author('George R. R.', 'Martin', 'United States', [book1, book2, book3]);

author1.getFullName();
author1.getBooks();