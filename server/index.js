
const express = require("express");
const fetch = require('node-fetch');
const cors = require('cors') 

const app = express();
app.use(cors({
    origin: '*'
}))

app.get('/ping', (req, res) => {
  res.json({hello:'ping'})
})

const BASE_DEX_API = `https://dex-api-production.up.railway.app/v1/dex/pair/`;
const BASE_1INCH = `https://api.1inch.io/v5.0/`;
const BASE_DEX_TOOLS = `https://www.dextools.io/shared/analytics/pairs/`;

app.get('/trending/:chainId', async ({params}, res) => {
  const {chainId} = params;
  try{
    let pools = await fetch(`${BASE_DEX_API}trending?chainId=${chainId}`);
    pools = await pools.json();
  
    res.json(pools)
  } catch(error) {

    console.log(error)
  }
})

app.get('/infoToken/:address/:chainId', async ({params}, res) => {
    try {
        const {address, chainId} = params;
        let pools = await fetch(`${BASE_DEX_API}poolAddress/${address}?chainId=${chainId}`);
        pools = await pools.json();
    
        res.json(pools)
    } catch (error) {
        
        console.log(error)
    }
})

app.get('/marketList/:chain', async ({params}, res) => {
    try {
        const {chain} = params;
        let pools = await fetch(`${BASE_DEX_TOOLS.replace("pairs/", "")}pairs?chain=${chain}&interval=24h`);
        pools = await pools.json();
        let btcPrice = await fetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT")
        btcPrice = await btcPrice.json();
        console.log(btcPrice)

        // pools = pools.data.map(async (pool, index) => {

        //     // ${BASE_DEX_API}candles/history/${pool._id.address}?from=${Date.now() - 604_800_000}&to=${Date.now()}&interval=7.2&chainId=1
        //     let graphic = await fetch(`https://dex-api-production.up.railway.app/v1/dex/candles/history/0xfd9397fd4Cd0245b42605015FD136A97D4488413?from=1689238800&to=1689325200&interval=7.2&chainId=56`);
        //     graphic = await graphic.json();
        //     console.log(index)

        //     return {
        //         ...pool,
        //         graphic,
        //     }
        // })
    

        res.json({
            pools,
            btcPrice:btcPrice.price
        })
    } catch (error) {
        
        console.log(error)
    }
})

app.get('/marketLoosers/:chainId', async ({params}, res) => {
    try {
        const {chainId} = params;
        let pools = await fetch(`${BASE_DEX_TOOLS}losers?chain=${chainId}`);
        pools = await pools.json();
    
        res.json(pools)
    } catch (error) {
        
        console.log(error)
    }
})

app.get('/marketGainers/:chainId', async ({params}, res) => {
    try {
        const {chainId} = params;
        let pools = await fetch(`${BASE_DEX_TOOLS}gainers?chain=${chainId}`);
        pools = await pools.json();
    
        res.json(pools)
    } catch (error) {
        
        console.log(error)
    }
})

app.get('/searchTokens/:address/:chainId', async ({params}, res) => {
    try {
        const {address, chainId} = params;
        console.log(`${BASE_DEX_API}search/${address}?chainId=${chainId}`)
        let pools = await fetch(`${BASE_DEX_API}search/${address}?chainId=${chainId}`);
        pools = await pools.json();
      
        res.json(pools)  
    } catch (error) {
        console.log(error)
        
    }
})

app.get('/allTokens/:chainId', async ({params}, res) => {
    try {
        const {chainId} = params;
        let pools = await fetch(`${BASE_1INCH}${chainId}/tokens`);
        pools = await pools.json();
    
        res.json(pools)
    } catch (error) {
        console.log(error)
        
    }
})

const graphicUrl = (
    address,
    from,
    chainId
) => {
    const now = Date.now();
    return `https://dex-api-production.up.railway.app/v1/dex/candles/history/${address}?from=${now-from}&to=${now}&interval=7.2&chainId=${chainId}`
}

app.get('/tradingTokens/:chainId/:address/D7', async ({params}, res) => {
    try {
        const d7 = 604_800_000;

        const {chainId, address} = params;

        let graphicD7 = await fetch(graphicUrl(address, d7,chainId));
        graphicD7 = await graphicD7.json();
      
        res.json(graphicD7.history) 
    } catch (error) {
        console.log(error)
    }
})

app.get('/tradingTokens/:chainId/:address/H24', async ({params}, res) => {
    try {
        const h24 = 86400000;

        const {chainId, address} = params;

        let graphicH24 = await fetch(graphicUrl(address,h24 ,chainId));
        graphicH24 = await graphicH24.json();
      
        res.json(graphicH24.history) 
    } catch (error) {
        console.log(error)
    }
})

app.get('/tradingTokens/:chainId/:address/H12', async ({params}, res) => {
    try {
        const h12 = 43200000;

        const {chainId, address} = params;

        let graphicH12 = await fetch(graphicUrl(address,h12 ,chainId));
        graphicH12 = await graphicH12.json();
      
        res.json(graphicH12.history) 
    } catch (error) {
        console.log(error)
    }
})


app.get('/tradingTokens/:chainId/:address/H6', async ({params}, res) => {
    try {
        const h6 = 21600000;

        const {chainId, address} = params;

        let graphicH6 = await fetch(graphicUrl(address,h6 ,chainId));
        graphicH6 = await graphicH6.json();
      
        res.json(graphicH6.history) 
    } catch (error) {
        console.log(error)
    }
})

app.get('/tradingTokens/:chainId/:address/H1', async ({params}, res) => {
    try {
        const h1 = 3600000;

        const {chainId, address} = params;

        let graphicH1 = await fetch(graphicUrl(address,h1 ,chainId));
        graphicH1 = await graphicH1.json();
      
        res.json(graphicH1.history) 
    } catch (error) {
        console.log(error)
    }
})



app.listen(3001);