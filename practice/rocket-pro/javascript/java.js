let $=document;
let btnLunch= $.querySelector('.lunch-btn');
let btnback= $.querySelector('.back-btn');
let rocketBd=$.querySelector('.rocket-body');
let counter=$.getElementById('counter');
btnLunch.addEventListener('click', startLunch);
function startLunch(){
    let i=10;
    let timeToLunch=setInterval(function(){
        if(i===0){
            let lifeChance=$.getElementById('life-chance');
            let randomNom=Math.round(Math.random()*100);
            switch(true){
                case randomNom<33:
                    lifeChance.innerHTML="rocket will explode"
                    lifeChance.style.backgroundColor="#ff0000"
                    console.log(randomNom)
                    break;
                case randomNom >= 33 && randomNom <= 60:
                    console.log(randomNom)
                    lifeChance.style.backgroundColor="#ffff00"
                    lifeChance.innerHTML="rocket has damage"
                    break;
                
                case 63< randomNom && randomNom<=100:
                    lifeChance.innerHTML="rocket has no problem"
                    lifeChance.style.backgroundColor="#00ff00"
                    console.log(randomNom)
                    break;
                    default:
                        lifeChance.innerHTML="rocket"
            }
            rocketBd.firstElementChild.style.display="block";
            clearInterval(timeToLunch)
            rocketBd.classList.add('start-eng');
            rocketBd.classList.remove("start-eng-back");
            rocketBd.addEventListener('animationend',()=>{
                rocketBd.firstElementChild.style.display="none";
            })
        }
        counter.innerHTML=i;
        i--
    },100)   
}
btnback.addEventListener('click',()=>{
    let i=10;
    let timeToLunch=setInterval(function(){
        if(i===0){
            let lifeChance=$.getElementById('life-chance');
            let randomNom=Math.round(Math.random()*100);
            switch(true){
                case randomNom<33:
                    lifeChance.innerHTML="rocket will expload"
                    lifeChance.style.backgroundColor="#ff0000"
                    console.log(randomNom)
                    break;
                case randomNom >= 33 && randomNom <= 60:
                    console.log(randomNom)
                    lifeChance.style.backgroundColor="#ffff00"
                    lifeChance.innerHTML="rocket has damage"
                    break;
                
                case 63< randomNom && randomNom<=100:
                    lifeChance.innerHTML="rocket has no problem"
                    lifeChance.style.backgroundColor="#00ff00"
                    console.log(randomNom)
                    break;
                    default:
                        lifeChance.innerHTML="rocket"
            }
            clearInterval(timeToLunch)
            rocketBd.firstElementChild.style.display="block";
            rocketBd.classList.add('start-eng-back');
            rocketBd.classList.remove("start-eng");
            rocketBd.addEventListener('animationend',()=>{
                rocketBd.firstElementChild.style.display="none";
            })
        }
        counter.innerHTML=i;
        i--
    },100)   
})
// start life chance