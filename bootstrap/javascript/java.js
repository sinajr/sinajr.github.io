let star= "#";
let btnStart=document.getElementById('btn-start')
btnStart.addEventListener('click',()=>{
    for(let i=0;i<=30;i++){
        if((i%2)==0){
            (console.log(star.repeat(i/2)))
        }else{
            (console.log((star+' ').repeat(i)))
        }
    }
})

