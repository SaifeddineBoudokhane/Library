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
    this.index=null;
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
    newBook.index=myLibrary.indexOf(newBook);
    displayBook(newBook);
}

    //function that displays a book on the page
function displayBook(book){

    //div.book
    const div=document.createElement("div");
    div.classList.add("book");
    div.id=book.index;
    //p.title
    const title=document.createElement("p");
    title.classList.add("title");
    title.textContent='"'+book.title+'"';

    //p.author
    const author=document.createElement("p")
    author.classList.add("author");
    author.textContent=book.author;

    //p.pages
    const pages=document.createElement("p");
    pages.classList.add("pages");
    pages.textContent=book.nbrPages+" Pages"

    //button.status
    const status=document.createElement("button");
    status.classList.add("status");
    status.value=book.index;
    if(book.status==true){
        status.textContent="Read";
        status.classList.add("read");
    }else{
        status.textContent="Not Read";
    }
    status.addEventListener("click",()=>{
        if(status.textContent=="Read"){
            status.classList.remove('read');
            status.textContent="Not Read"
            myLibrary[Number(status.value)].status=false;
        }else{
            status.classList.add('read');
            status.textContent="Read";
            myLibrary[Number(status.value)].status=true;
        }
    })
    //button.remove
    const remove=document.createElement("button")
    remove.classList.add("remove");
    remove.textContent="Remove";
    remove.value=book.index;
    remove.addEventListener("click",()=>{
        myLibrary[Number(remove.value)]=null;
        const divRemove=document.getElementById(`${remove.value}`);
        divRemove.remove();
    })
    //add to DOM
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(status);
    div.appendChild(remove);
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