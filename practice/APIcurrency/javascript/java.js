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
                <table class="table">
                <tbody>
                    <tr class="text-center">
                        <td class="text-danger">EUR price</td>
                        <td>${res.EUR}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> EUR price</td>  
                    <td>${res.EUR}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> USD price</td>  
                    <td>${res.USD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> TRY price</td>  
                    <td>${res.TRY}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> AUD price</td>  
                    <td>${res.AUD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> BGN price</td>  
                    <td>${res.BGN}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> BRL price</td>  
                    <td>${res.BRL}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> CAD price</td>  
                    <td>${res.CAD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> CHF price</td>  
                    <td>${res.CHF}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> CNY price</td>  
                    <td>${res.CNY}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> CZK price</td>  
                    <td>${res.CZK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> DKK price</td>  
                    <td>${res.DKK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> GBP price</td>  
                    <td>${res.GBP}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> HRK price</td>  
                    <td>${res.HRK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> HKD price</td>  
                    <td>${res.HKD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> HUF price</td>  
                    <td>${res.HUF}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> IDR price</td>  
                    <td>${res.IDR}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> HKD price</td>  
                    <td>${res.ILS}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> ILS price</td>  
                    <td>${res.HKD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> INR price</td>  
                    <td>${res.INR}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> ISK price</td>  
                    <td>${res.ISK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> JPY price</td>  
                    <td>${res.JPY}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> KRW price</td>  
                    <td>${res.KRW}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> MXN price</td>  
                    <td>${res.MXN}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> MYR price</td>  
                    <td>${res.MYR}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> NOK price</td>  
                    <td>${res.NOK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> NZD price</td>  
                    <td>${res.NZD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> PHP price</td>  
                    <td>${res.PHP}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> PLN price</td>  
                    <td>${res.PLN}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> RON price</td>  
                    <td>${res.RON}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> RUB price</td>  
                    <td>${res.RUB}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> SEK price</td>  
                    <td>${res.SEK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> SGD price</td>  
                    <td>${res.SGD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> THB price</td>  
                    <td>${res.THB}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> ZAR price</td>  <td>${res.ZAR}
                    </td></div>        
                    </tr>
                </tbody>
                <table>
                `);
        }
    )
    console.log(mainPrice)
}
// showBox.insertAdjacentHTML('beforeend',`<div>${datas}</div>`);
// for(let i=0 ;i < newArray.length;i++){
//     console.log(i)
// }