let $=document;
let xx=$.querySelectorAll('.x');
let oo=$.querySelectorAll('.o');
let boxes=$.querySelectorAll('.box');

oo.forEach(function(os){
    os.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('obox',e.target.id);        
    })
})
xx.forEach(function(xxs){
    xxs.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('xxxx',e.target.id);        
    })
})
function dragoverhandler(event){
    event.preventDefault()
}
boxes.forEach(function(bx){
    bx.addEventListener("drop",(event)=>{
        let xpushBox=event.dataTransfer.getData('xxxx')
        let opush=event.dataTransfer.getData('obox')
        let newODiv=document.getElementById(opush);
        let newXDiv=document.getElementById(xpushBox);
        if(bx.innerHTML!=""){
            preventDefault();
        }
        if(newODiv){
            bx.append(newODiv);
        }else{
            bx.append(newXDiv);  
        }
    })
})