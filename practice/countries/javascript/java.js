var $=document;
let flagShow=$.getElementById('flag-shower');
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
let flagFragment=$.createDocumentFragment();
flagArray.forEach(function(flags){
    flagShow.insertAdjacentHTML('beforeend','<div class="row my-3 p-5"><div class="col-md-6 justify-content-center d-flex"><h2 class="align-self-center">'+flags.name+'</h2></div><div class="col-md-6"><div class="col-md-4"></div><div class="col-md-4"><a href="flags.html?id='+flags.id+'"><img id="'+flags.id+'" src="'+flags.flagUrl+'" alt="flag" class="w-100 clicker"> </a></div><div class="col-md-4"></div></div></div>')
})