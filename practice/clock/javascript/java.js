var $=document;
let secdegrees=0
let mindegrees=0
let hoursdegrees=0
let secondsShower=$.querySelector('.seconds')
let mintsShower=$.querySelector('.mints')
let hoursShower=$.querySelector('.hours')

let currentSecond=new Date().getSeconds();
secdegrees=currentSecond*6;
secondsShower.style.transform= "rotate("+secdegrees+"deg)";
let secondstimer=setInterval(function(){
        let currentSecond=new Date().getSeconds();
        secdegrees=currentSecond*6;
        secondsShower.style.transform= "rotate("+secdegrees+"deg)";

},1000)

let currontMin=new Date().getMinutes();
mindegrees=currontMin*6;
mintsShower.style.transform= "rotate("+mindegrees+"deg)";

let mintsTimer=setInterval(function(){
    let currontMin=new Date().getMinutes();
        mindegrees=currontMin*6;
        mintsShower.style.transform= "rotate("+mindegrees+"deg)";
},60000)

let curronthour=new Date().getHours()-12;
if(curronthour<0){
    hoursdegrees=0;
    hoursShower.style.transform= "rotate("+hoursdegrees+"deg)";    
}
hoursdegrees=curronthour*30;
hoursShower.style.transform= "rotate("+hoursdegrees+"deg)";
console.log(curronthour)

let hourtsTimer=setInterval(function(){
    let curronthour=new Date().getHours()-12;
    if(curronthour<0){
        hoursdegrees=0;
        hoursShower.style.transform= "rotate("+hoursdegrees+"deg)";    
    }
        hoursdegrees=curronthour*30;
        hoursShower.style.transform= "rotate("+hoursdegrees+"deg)";
},3600000)
