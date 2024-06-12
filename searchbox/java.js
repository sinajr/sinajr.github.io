var $=document;
let searchBox=$.querySelector('#search-box');
let ulBox=$.querySelector('#ul-box');
let searchArray=[
    "google",
    "how to learn javascript",
    "how to learn finnish",
    "how to learn html",
    "css learning",
    "web developing for beginers",
    "how to make a website with wordpress",
    "how to make a app"
]
searchBox.addEventListener('keyup',enterCheck)
searchBox.addEventListener('input',suggestionWord)
function enterCheck(e){
     if(e.key==="Enter"){
            let searchValue=searchBox.value;
            searchArray.push(searchValue)
            console.log(searchArray)
            searchBox.value=""
            ulBox.innerHTML=""
         }
}

function suggestionWord(){
    if(searchBox.value===""){
        ulBox.style.display="none"
        ulBox.innerHTML=""
    }else{
        ulBox.innerHTML=""
        ulBox.style.display="block"
        let arraySearch=searchArray.filter(function(words){
            return words.includes(searchBox.value);
        })
        arraySearch.forEach(function(w){
            ulBox.insertAdjacentHTML('beforeend','<li class="list-group-item border-danger">'+w+'</li>')
        })
    }
}