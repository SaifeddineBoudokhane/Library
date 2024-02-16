
const myLibrary = [];

function Book(title="title",author="author",nbrPages=0,status=false){
    this.title=title;
    this.author=author;
    this.nbrPages=nbrPages;
    this.status=status;
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}

//displaying a book
const bookList=document.querySelector("div.books");

function displayBook(book){
    const div=document.createElement("div");
    div.classList.add("book");
    const title=document.createElement("p");
    title.classList.add("title");
    title.textContent='"'+book.title+'"';
    const author=document.createElement("p")
    author.classList.add("author");
    author.textContent=book.author;
    const pages=document.createElement("p");
    pages.classList.add("pages");
    pages.textContent=book.nbrPages+" Pages"
    const status=document.createElement("p");
    status.classList.add("status");
    if(book.status==true){
        status.textContent="Read";
    }else{
        status.textContent="Not Read";
    }
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(status);
    bookList.insertAdjacentElement("afterbegin",div)
}

const book1=new Book("The Hobbit","J.R.R. Tolkien",295,true);
const book2=new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book3=new Book("1984", "George Orwell", 328, false);
const book4=new Book("Pride and Prejudice", "Jane Austen", 279, true);
const book5=new Book("To the Lighthouse", "Virginia Woolf", 209, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
myLibrary.forEach(displayBook)