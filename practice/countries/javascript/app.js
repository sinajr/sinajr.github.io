let goBlack=document.querySelector('#go-back')
goBlack.addEventListener('click',()=>{
    window.history.back()
})
let showContent=document.getElementById('content-show')
let flagArray=[
    {id:"1" ,name:'Algeria',flagUrl:'image/al.png'},
    {id:"2" ,name:'Afghanistan',flagUrl:'image/af.png'},
    {id:"3" ,name:'Saudi',flagUrl:'image/arab.png'},
    {id:"4" ,name:'Azerbaijan',flagUrl:'image/az.png'},
    {id:"5" ,name:'Bahrain',flagUrl:'image/ba.png'},
    {id:"6" ,name:'Belgium',flagUrl:'image/blg.png'},
    {id:"7" ,name:'Bosni',flagUrl:'image/bos.png'},
    {id:"8" ,name:'Brazil',flagUrl:'image/brz.png'},
    {id:"9" ,name:'Canada',flagUrl:'image/ca.png'},
    {id:"10", name:'Chaina',flagUrl:'image/cha.png'},
    {id:"11", name:'England',flagUrl:'image/en.png'},
    {id:"12", name:'United kingdom',flagUrl:'image/eng.png'},
    {id:"13", name:'Finland',flagUrl:'image/fi.png'},
    {id:"14", name:'Germany',flagUrl:'image/ger.png'},
    {id:"15", name:'Ghatar',flagUrl:'image/ghatar.png'},
    {id:"16", name:'Icland',flagUrl:'image/ic.png'},
    {id:"17", name:'India',flagUrl:'image/ind.png'},
    {id:"18", name:'Iran',flagUrl:'image/ir.png'},
    {id:"19", name:'Iraq',flagUrl:'image/iraq.png'},
    {id:"20", name:'Irland',flagUrl:'image/irland.png'},
    {id:"21", name:'Japan',flagUrl:'image/jap.png'},
    {id:"22", name:'South Korea',flagUrl:'image/kor.png'},
    {id:"23", name:'Koweit',flagUrl:'image/kw.png'},
    {id:"24", name:'Lithvania',flagUrl:'image/lith.png'},
    {id:"25", name:'Luxamborg',flagUrl:'image/lux.png'},
    {id:"26", name:'Moroco',flagUrl:'image/moro.png'},
    {id:"27", name:'Netherland',flagUrl:'image/ne.png'},
    {id:"28", name:'Norway',flagUrl:'image/no.png'},
    {id:"29", name:'Plestain',flagUrl:'image/ple.png'},
    {id:"30", name:'Russia',flagUrl:'image/rus.png'},
    {id:"31", name:'Spain',flagUrl:'image/spain.png'},
    {id:"32", name:'algeria',flagUrl:'image/sur.png'},
    {id:"33", name:'algeria',flagUrl:'image/swi.png'},
    {id:"34", name:'Turkey',flagUrl:'image/tr.png'},
    {id:"35", name:'USA',flagUrl:'image/usa.png'},
    {id:"36", name:'Venezoela',flagUrl:'image/vene.png'},
    {id:"37", name:'Wales',flagUrl:'image/wal.png'}

]
let locationSearchId=location.search;
let locationID= new URLSearchParams(locationSearchId);
let flagsId= locationID.get("id")
let flagFinder= flagArray.find(function(target){
     return target.id==flagsId
})
showContent.insertAdjacentHTML('beforeend','<h2 class="text-center my-5">'+flagFinder.name+'</h2><div class="row"><div class="col-md-6 d-flex justify-content-center"><img src="'+flagFinder.flagUrl+'" alt="image"></div><div class="col-md-6"><p class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div></div>')