let $=document;
let btnUP=$.getElementById('btn-up');
let showBox=$.querySelector('#show-price')
btnUP.addEventListener('click',clickUpDate)


function clickUpDate(){
    let mainPrice=fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_9FBdZgwltNiwMcbJaILxejbi34WdoQYv7rOcyaFC')
    .then(
        response=>{
            return response.json()
        }
    )
    .then(
        response1 =>{
            let newArray=response1.data
            console.log(newArray)
            return newArray;
        }
    )
    .then(
        res=>{
            showBox.insertAdjacentHTML('beforeend',`
                <div> EUR price  ${res.EUR}</div>
                <div> USD price  ${res.USD}</div>
                <div> TRY price  ${res.TRY}</div>
                <div> AUD price  ${res.AUD}</div>
                <div> BGN price  ${res.BGN}</div>
                <div> BRL price  ${res.BRL}</div>
                <div> CAD price  ${res.CAD}</div>
                <div> CHF price  ${res.CHF}</div>
                <div> CNY price  ${res.CNY}</div>
                <div> CZK price  ${res.CZK}</div>
                <div> DKK price  ${res.DKK}</div>
                <div> GBP price  ${res.GBP}</div>
                <div> HRK price  ${res.HRK}</div>
                <div> HKD price  ${res.HKD}</div>
                <div> HUF price  ${res.HUF}</div>
                <div> IDR price  ${res.IDR}</div>
                <div> HKD price  ${res.ILS}</div>
                <div> ILS price  ${res.HKD}</div>
                <div> INR price  ${res.INR}</div>
                <div> ISK price  ${res.ISK}</div>
                <div> JPY price  ${res.JPY}</div>
                <div> KRW price  ${res.KRW}</div>
                <div> MXN price  ${res.MXN}</div>
                <div> MYR price  ${res.MYR}</div>
                <div> NOK price  ${res.NOK}</div>
                <div> NZD price  ${res.NZD}</div>
                <div> PHP price  ${res.PHP}</div>
                <div> PLN price  ${res.PLN}</div>
                <div> RON price  ${res.RON}</div>
                <div> RUB price  ${res.RUB}</div>
                <div> SEK price  ${res.SEK}</div>
                <div> SGD price  ${res.SGD}</div>
                <div> THB price  ${res.THB}</div>
                <div> ZAR price  ${res.ZAR}</div>              
                `);
        }
    )
    console.log(mainPrice)
}
// showBox.insertAdjacentHTML('beforeend',`<div>${datas}</div>`);
// for(let i=0 ;i < newArray.length;i++){
//     console.log(i)
// }