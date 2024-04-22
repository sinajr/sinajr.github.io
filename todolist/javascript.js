let $=document;
let inpt=$.getElementById('inpt-main');
let todoContainer=$.querySelector('.todo-container');
let btnEnter=$.querySelector('#enterbt');
let btnRemove=$.querySelector('#removebt');
let toDOArr=[];
console.log(toDOArr)
let i=0;
inpt.addEventListener('keydown',(e)=>{
    if(e.code==="Enter"&& inpt.value!=""){
        let contentA={
            content:"",
            status:"uncomplete",
            id:0
        }
        let inptVal=inpt.value;
        contentA.content=inptVal;
        contentA.id=i;
        let newDiv=$.createElement('div');
        newDiv.classList.add('Todobox');
        todoContainer.append(newDiv);
        let newp=$.createElement('p');
        newp.classList.add('pclass')
        newp.innerHTML=contentA.content+" and status is "+contentA.status;
        newDiv.append(newp);
        let newbtCom=$.createElement('button');
        newbtCom.classList.add('mybtns')
        newbtCom.innerText="Complete"
        newbtCom.setAttribute('id','btCom')
        newDiv.append(newbtCom)
        let newbtDel=$.createElement('button');
        newbtDel.classList.add('mybtns')
        newbtDel.setAttribute('id','btDel');
        newbtDel.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
            toDOArr.splice(i,i)
        })
        newbtDel.innerText="Delete"
        newDiv.append(newbtDel)
        toDOArr.push(contentA);
        localStorage.setItem('tostorage',JSON.stringify(toDOArr));
        i++
    }
})
btnEnter.addEventListener('click',()=>{
    if(inpt.value!=""){
        let contentA={
            content:"",
            status:"uncomplite",
            id:0
        }
        let inptVal=inpt.value;
        contentA.content=inptVal;
        contentA.id=i;
        let newDiv=$.createElement('div');
        newDiv.classList.add('Todobox');
        todoContainer.append(newDiv);
        let newp=$.createElement('p');
        newp.classList.add('pclass')
        newp.innerHTML=contentA.content+" and status is "+contentA.status;
        newDiv.append(newp);
        let newbtCom=$.createElement('button');
        newbtCom.classList.add('mybtns')
        newbtCom.innerText="Complete"
        newbtCom.setAttribute('id','btCom')
        newDiv.append(newbtCom)
        let newbtDel=$.createElement('button');
        newbtDel.classList.add('mybtns')
        newbtDel.setAttribute('id','btDel');
        newbtDel.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
            toDOArr.splice(i,i)
        })
        newbtDel.innerText="Delete"
        newDiv.append(newbtDel)
        toDOArr.push(contentA);
        localStorage.setItem('tostorage',JSON.stringify(toDOArr));
        i++
    }
})
btnRemove.addEventListener('click',()=>{
    localStorage.clear();
    todoContainer.innerHTML="";

})
window.onload=function(){
    let checkerPage=JSON.parse(localStorage.getItem('tostorage'))
    console.log(checkerPage)
if(checkerPage){        
    checkerPage.forEach(function(old){
            let inptOld=old.content;
            let newDiv=$.createElement('div');
            newDiv.classList.add('Todobox');
            todoContainer.append(newDiv);
            let newp=$.createElement('p');
            newp.classList.add('pclass')
            newp.innerHTML=inptOld+" and Status is "+old.status;
            newDiv.append(newp);
            let newbtCom=$.createElement('button');
            newbtCom.classList.add('mybtns')
            newbtCom.innerText="Complete"
            newbtCom.setAttribute('id','btCom')
            newDiv.append(newbtCom)
            let newbtDel=$.createElement('button');
            newbtDel.classList.add('mybtns')
            newbtDel.setAttribute('id','btDel');
            newbtDel.addEventListener('click',(e)=>{
                e.target.parentElement.remove();
            })
            newbtDel.innerText="Delete"
            newDiv.append(newbtDel)
            i++
            return toDOArr=JSON.parse(localStorage.getItem('tostorage'));
            });}
}