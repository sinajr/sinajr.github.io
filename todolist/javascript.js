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
        newp.innerHTML=contentA.content;
        newDiv.append(newp);
        let newbtCom=$.createElement('button');
        newbtCom.classList.add('mybtns')
        newbtCom.innerText="Complete"
        newbtCom.setAttribute('id','btCom')
        newDiv.append(newbtCom)
        newbtCom.addEventListener('click',(e)=>{

            let getarrayItem=JSON.parse(localStorage.getItem('tostorage'));
            getarrayItem[contentA.id].status="comlplited";
            localStorage.setItem('tostorage',JSON.stringify(getarrayItem));
            e.target.classList.remove('mybtns');
            e.target.classList.add('bggreen');
            e.target.innerHTML="Done"
            console.log(e.target);
            
        })
        let newbtDel=$.createElement('button');
        newbtDel.classList.add('mybtns')
        newbtDel.setAttribute('id','btDel');
        newbtDel.addEventListener('click',(e)=>{
            let checkerPageDown=JSON.parse(localStorage.getItem('tostorage'));
                e.target.parentElement.remove();
                console.log(checkerPageDown);
                checkerPageDown.splice(i,1);
                localStorage.setItem('tostorage',JSON.stringify(checkerPageDown));
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
        newp.innerHTML=contentA.content;
        newDiv.append(newp);
        let newbtCom=$.createElement('button');
        newbtCom.classList.add('mybtns')
        newbtCom.innerText="Complete"
        newbtCom.setAttribute('id','btCom')
        newDiv.append(newbtCom)
        newbtCom.addEventListener('click',()=>{
            
            let getarrayItem=JSON.parse(localStorage.getItem('tostorage'));
            getarrayItem[contentA.id].status="comlplited";
            localStorage.setItem('tostorage',JSON.stringify(getarrayItem));
            e.target.classList.remove('mybtns');
            e.target.classList.add('bggreen');
            e.target.innerHTML="Done"
            console.log(e.target);

        })
        let newbtDel=$.createElement('button');
        newbtDel.classList.add('mybtns')
        newbtDel.setAttribute('id','btDel');
        newbtDel.addEventListener('click',(e)=>{
            let checkerPageClick=JSON.parse(localStorage.getItem('tostorage'));
                e.target.parentElement.remove();
                console.log(i);
                checkerPageClick.splice(i,1);
                console.log(checkerPage);
                localStorage.setItem('tostorage',JSON.stringify(checkerPageClick));
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
    console.log(toDOArr)
    if(checkerPage){        
        toDOArr=checkerPage;  
        checkerPage.forEach(function(old){
            let indexCounter=checkerPage[i].id
            let inptOld=old.content;
            let newDiv=$.createElement('div');
            newDiv.classList.add('Todobox');
            todoContainer.append(newDiv);
            let newp=$.createElement('p');
            newp.classList.add('pclass')
            newp.innerHTML=inptOld
            newDiv.append(newp);
            let newbtCom=$.createElement('button');
            newbtCom.classList.add('mybtns')
            newbtCom.innerText="Complete"
            newbtCom.setAttribute('id','btCom')
            newbtCom.addEventListener('click',(e)=>{

                let getarrayItem=JSON.parse(localStorage.getItem('tostorage'));
                getarrayItem[indexCounter].status="comlplited";
                localStorage.setItem('tostorage',JSON.stringify(getarrayItem));
                e.target.classList.remove('mybtns');
                e.target.classList.add('bggreen');
                e.target.innerHTML="Done"
                console.log(e.target);

            })
            newDiv.append(newbtCom)
            let newbtDel=$.createElement('button');
            newbtDel.classList.add('mybtns')
            newbtDel.setAttribute('id','btDel');
            newbtDel.addEventListener('click',(e)=>{
                let checkerPagedel=JSON.parse(localStorage.getItem('tostorage'));
                e.target.parentElement.remove();
                checkerPagedel.splice(checkerPagedel[indexCounter].id,1);
                localStorage.setItem('tostorage',JSON.stringify(checkerPagedel));
         
            })
            newbtDel.innerText="Delete"
            newDiv.append(newbtDel)
            i++
            return toDOArr=JSON.parse(localStorage.getItem('tostorage'));
            });}
}