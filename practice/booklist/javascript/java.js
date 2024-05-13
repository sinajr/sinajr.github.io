var $=document;
let btnSubmit=document.querySelector('.btn');
let userInputs=$.querySelectorAll('input');
btnSubmit.addEventListener('click',addBooks);
let booksArray=[]
function addBooks(){
    let books={
        title:userInputs[0].value,
        author:userInputs[1].value,
        year:userInputs[2].value
     }
        booksArray.push(books);
        localStorage.setItem('booksArrays',JSON.stringify(booksArray));
}
window.onload= windowLoad();
function windowLoad(){
    let bookcase=JSON.parse(localStorage.getItem('booksArrays'));
       localStorage.setItem('booksArrays',JSON.stringify(bookcase))
        console.log(bookcase)
}