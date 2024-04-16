let $=document;
let userIpt=Number(prompt("inter your age"));
let lichanger=$.querySelectorAll('.lis');
if(userIpt>18){
    lichanger[0].innerHTML="your age is enough for bars";
}if (userIpt===18) {
    lichanger[1].innerHTML="your age is equal to 18 you can go";
} else {
    lichanger[2].innerHTML="your age is undder 18 you are so young"
}