//Global variables
const myLibrary = [];
const bookList=document.querySelector("div.books");
const buttonAdd=document.querySelector("button.add");
    //dialog variables
const dialog=document.getElementById("pop-up");
const form=document.querySelector("form")
const inputTitle=document.getElementById("title");
const inputAuthor=document.getElementById("author");
const inputPages=document.getElementById("pages");
const inputStatus=document.getElementById("status");
const buttonSubmit=document.getElementById("submit");
//Book constructor
function Book(title="title",author="author",nbrPages=0,status=false){
    this.title=title;
    this.author=author;
    this.nbrPages=nbrPages;
    this.status=status;
}
//functions
    //function that creates a book from dialog input
function createBook(){
    const newBook=new Book(inputTitle.value,inputAuthor.value,inputPages.value,inputStatus.checked)
    return newBook;
}
    //function that adds book to library
function addBookToLibrary(newBook){
    myLibrary.push(newBook);
    displayBook(newBook);
}

    //function that displays a book on the page
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

//Event Listeners
buttonAdd.addEventListener("click",()=>{
    dialog.showModal();
});
buttonSubmit.addEventListener("click",()=>{
    if(form.checkValidity()){
        const newBook=createBook();
        addBookToLibrary(newBook);
        dialog.close();
    }
});