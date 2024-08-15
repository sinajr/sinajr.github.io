let $=document;

const asincCDN = function(cdn){
    return new Promise((resolve,reject)=>{
        let linkTag=$.createElement('link');
        linkTag.setAttribute('href',cdn);
        linkTag.setAttribute('rel',"stylesheet");
        linkTag.setAttribute('type',"text/css");

        linkTag.onload=()=>resolve('load success :)))');
        linkTag.onerror=()=>reject(new Error('load failed :((('));

        $.head.append(linkTag);
    })
}
asincCDN('style.css')
.then( response =>{
    console.log(response)
    document.body.insertAdjacentHTML('afterbegin',`<h1 class="text-center my-5">${response}</h1>`)
})
.catch(err=>{
    console.log(err)
    document.body.insertAdjacentHTML('afterbegin',`<h1>${err}</h1>`)
})