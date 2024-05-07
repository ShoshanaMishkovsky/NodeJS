import superagent from 'superagent';
import CoinRes from './Interface'
function ConvertCoin(price:number,coin:string){
    const API_KEY="ce8d376dbdac12d8d4e9757e";
    const url=`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${coin}`;
superagent.get(url).then((res:any)=>{
    const data:CoinRes=res.body
            const ils:string='ILS';
          const priceInILS=data.conversion_rates[ils]*price
          console.log(`${price} ${coin} worth ${priceInILS} in shekels`)

}

).catch((err:any)=>{
    if(err){
                    console.log(err.message)
                }  
})
}
ConvertCoin(50,"Euro")