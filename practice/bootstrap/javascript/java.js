let star= "#";
let btnStart=document.getElementById('btn-start')
btnStart.addEventListener('click',()=>{
    for(let j=0;j<10;j++){
        for(let i=1;i<=10;i++){
            if((i%2)==0){
                let di= i/2;
                (console.log((star+" ").repeat(di)+star))
            }else{
                (console.log((star).repeat(i)))
            }
            
        }
        for(i=10;i>=1;i--){
            if((i%2)==0){
                (console.log((star).repeat(i)))
            }else{
                let di= i/2;
                (console.log((star+" ").repeat(di)+star))
            }   
        }
    }
})

