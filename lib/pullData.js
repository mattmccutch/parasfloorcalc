export async function pullData(){
     let lowest_price = 1;
    let collection_id = 'nft.goodfortunefelines.near'
    const prices = [];
    for(let i =0; i < 3; i++){

        const api_url = 
        `https://api-v2-mainnet.paras.id/token-series?collection_id=${collection_id}&exclude_total_burn=true&__limit=30&__sort=lowest_price::1&_id_next=61f0a777c6a48a907bd65498&lowest_price_next=${lowest_price}&owner_id=false`;
    let newData = {};
    const data = await fetch(api_url).then((result) =>{
        return result.json();
    })
    newData = data;
    // for(let r of data.data.results){
    //     if(r.lowest_price/1000000000000000000000000 != 0){
    //         prices.push(r.lowest_price/1000000000000000000000000);
    //     }


    lowest_price = data.data.results[29].lowest_price;
    prices.push(newData);

   }
   return prices;
}

