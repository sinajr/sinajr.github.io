let $=document;
let userArray=[
    {name:"ali",lastneme:"master",userName:"1"},
    {name:"ali",lastneme:"master",userName:"1"},
    {name:"ali",lastneme:"master",userName:"1"},
    {name:"ali",lastneme:"master",userName:"1"},
    {name:"ali",lastneme:"master",userName:"1"},
    
    {name:"ali",lastneme:"master",userName:"2"},
    {name:"ali",lastneme:"master",userName:"2"},
    {name:"ali",lastneme:"master",userName:"2"},
    {name:"ali",lastneme:"master",userName:"2"},
    {name:"ali",lastneme:"master",userName:"2"},

    {name:"ali",lastneme:"master",userName:"3"},
    {name:"ali",lastneme:"master",userName:"3"},
    {name:"ali",lastneme:"master",userName:"3"},
    {name:"ali",lastneme:"master",userName:"3"},
    {name:"ali",lastneme:"master",userName:"3"},

    {name:"ali",lastneme:"master",userName:"4"},
    {name:"ali",lastneme:"master",userName:"4"},
    {name:"ali",lastneme:"master",userName:"4"},
    {name:"ali",lastneme:"master",userName:"4"},
    {name:"ali",lastneme:"master",userName:"4"},

    {name:"ali",lastneme:"master",userName:"5"},
    {name:"ali",lastneme:"master",userName:"5"},
    {name:"ali",lastneme:"master",userName:"5"},
    {name:"ali",lastneme:"master",userName:"5"},
    {name:"ali",lastneme:"master",userName:"5"},

    {name:"ali",lastneme:"master",userName:"6"},
    {name:"ali",lastneme:"master",userName:"6"},
    {name:"ali",lastneme:"master",userName:"6"},
    {name:"ali",lastneme:"master",userName:"6"},
    {name:"ali",lastneme:"master",userName:"6"},

    {name:"ali",lastneme:"master",userName:"7"},
    {name:"ali",lastneme:"master",userName:"7"},
    {name:"ali",lastneme:"master",userName:"7"},
    {name:"ali",lastneme:"master",userName:"7"},
    {name:"ali",lastneme:"master",userName:"7"},

    {name:"ali",lastneme:"master",userName:"8"},
    {name:"ali",lastneme:"master",userName:"8"},
    {name:"ali",lastneme:"master",userName:"8"},
    {name:"ali",lastneme:"master",userName:"8"},
    {name:"ali",lastneme:"master",userName:"8"},

    {name:"ali",lastneme:"master",userName:"9"},
    {name:"ali",lastneme:"master",userName:"9"},
    {name:"ali",lastneme:"master",userName:"9"},
    {name:"ali",lastneme:"master",userName:"9"},
    {name:"ali",lastneme:"master",userName:"9"},
    
    {name:"ali",lastneme:"master",userName:"10"},
    {name:"ali",lastneme:"master",userName:"10"}
]
let listElem=$.getElementById('list');
let btntElem=$.getElementById('Pagination');
let currentPage=1;
let userPerPage=5;
let arangeArray=[]

function pagination(arrays,wraper,current,PerPage){
    wraper.innerHTML=""
        let arraysava=Math.ceil(arrays.length/PerPage);
        let end= PerPage*current;
            let start= end-PerPage;
            let paginationItems= arrays.slice(start,end);
        paginationItems.forEach(function(item){
            let newDiv=$.createElement('div');
            newName=$.createElement('span');
            newLastName=$.createElement('span');
            newUsername=$.createElement('span');
            newName=item.name;
            newLastName=item.lastneme;
            newUsername=item.userName;
            newDiv.innerHTML="Name: "+newName+" LastName: "+newLastName+" UserName: "+newUsername;
            newDiv.className="col-md-12 py-4 m-2 bg-warning rounded"
            wraper.append(newDiv);
            
        })
    if(arraysava>0){
        for(let i=1 ;i<=arraysava;i++){
            end= PerPage*current;
            start= end-PerPage;
            paginationItems= arrays.slice(start,end);     
            arangeArray.push(paginationItems);
            let newBtn=$.createElement('button');
            newBtn.innerHTML=i;
            newBtn.classList="col-md-1 btn text-center btn-outline-danger py-4 m-2 rounded";
            btntElem.append(newBtn)
            current++
        }
        // if(arangeArray[arangeArray.length]==[]){
            
        //     pageBtn[pageBtn.length].style.display="none"
        // }
        // console.log(arangeArray.length)
        console.log(arangeArray)
    }
}
function showOtherItem(arrays,wraper,current,PerPage){
let pageBtn=$.querySelectorAll('.btn');
    pageBtn.forEach(function(btns){

        btns.addEventListener('click',(e)=>{
            wraper.innerHTML="";
            arangeArray[Number(e.target.innerHTML)-1].forEach(function(item){
                let newDiv=$.createElement('div');
                newName=$.createElement('span');
                newLastName=$.createElement('span');
                newUsername=$.createElement('span');
                newName=item.name;
                newLastName=item.lastneme;
                newUsername=item.userName;
                newDiv.innerHTML="Name: "+newName+" LastName: "+newLastName+" UserName: "+newUsername;
                newDiv.className="col-md-12 py-4 m-2 bg-warning rounded"
                wraper.append(newDiv);
            })
        })
    })

}

pagination(userArray,listElem,currentPage,userPerPage);
showOtherItem(userArray,listElem,currentPage,userPerPage)