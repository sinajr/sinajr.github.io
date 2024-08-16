let $=document;
let btnUP=$.getElementById('btn-up');
let showBox=$.querySelector('#show-price')
btnUP.addEventListener('click',clickUpDate)


function clickUpDate(){
    showBox.innerHTML=""
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
                <thead class="text-center">
                <tr>
                  <th scope="col">Curenccy</th>
                  <th scope="col">Price</th>
                </tr>
        </thead>
                <tbody>
                    <tr class="text-center">
                    <td class="text-danger"> EUR</td>  
                    <td>${res.EUR}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> USD</td>  
                    <td>${res.USD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> TRY</td>  
                    <td>${res.TRY}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> AUD</td>  
                    <td>${res.AUD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> BGN</td>  
                    <td>${res.BGN}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> BRL</td>  
                    <td>${res.BRL}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> CAD</td>  
                    <td>${res.CAD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> CHF</td>  
                    <td>${res.CHF}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> CNY</td>  
                    <td>${res.CNY}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> CZK</td>  
                    <td>${res.CZK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> DKK</td>  
                    <td>${res.DKK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> GBP</td>  
                    <td>${res.GBP}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> HRK</td>  
                    <td>${res.HRK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> HKD</td>  
                    <td>${res.HKD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> HUF</td>  
                    <td>${res.HUF}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> IDR</td>  
                    <td>${res.IDR}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> HKD</td>  
                    <td>${res.ILS}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> ILS</td>  
                    <td>${res.HKD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> INR</td>  
                    <td>${res.INR}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> ISK</td>  
                    <td>${res.ISK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> JPY</td>  
                    <td>${res.JPY}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> KRW</td>  
                    <td>${res.KRW}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> MXN</td>  
                    <td>${res.MXN}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> MYR</td>  
                    <td>${res.MYR}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> NOK</td>  
                    <td>${res.NOK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> NZD</td>  
                    <td>${res.NZD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> PHP</td>  
                    <td>${res.PHP}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> PLN</td>  
                    <td>${res.PLN}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> RON</td>  
                    <td>${res.RON}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> RUB</td>  
                    <td>${res.RUB}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> SEK</td>  
                    <td>${res.SEK}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> SGD</td>  
                    <td>${res.SGD}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> THB</td>  
                    <td>${res.THB}</td>
                    </tr>
                    <tr class="text-center">
                    <td class="text-danger"> ZAR</td>  <td>${res.ZAR}
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