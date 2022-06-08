let btc = document.getElementById("bitcoin");
let dacxi = document.getElementById("dacxi");
let eth = document.getElementById("ethereum");
let atom = document.getElementById("cosmos");
let lunc = document.getElementById("luna-wormhole");

let currBtcPrice = 0;
let currDacxiPrice = 0;
let currEthPrice = 0;
let currAtomPrice = 0;
let currLuncPrice = 0; 

let prevBtcPrice = 0;
let prevDacxiPrice = 0;
let prevEthPrice = 0;
let prevAtomPrice = 0;
let prevLuncPrice = 0; 


axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,luna-wormhole,cosmos,dacxi&vs_currencies=usd").then(response => {

    currBtcPrice = response.data.bitcoin.usd,
    currDacxiPrice = response.data.dacxi.usd,
    currEthPrice = response.data.ethereum.usd,
    currAtomPrice = response.data.cosmos.usd,
    currLuncPrice = response.data["luna-wormhole"].usd;

    if(currBtcPrice !== prevBtcPrice) btc.innerHTML = "$" + currBtcPrice; 
    if(currDacxiPrice !== prevDacxiPrice) dacxi.innerHTML = "$" + currDacxiPrice;
    if(currEthPrice !== prevEthPrice) eth.innerHTML = "$" + currEthPrice;
    if(currAtomPrice !== prevAtomPrice) atom.innerHTML = "$" + currAtomPrice;
    if(currLuncPrice !== prevLuncPrice) lunc.innerHTML = "$" + currLuncPrice;

    prevBtcPrice = response.data.bitcoin.usd,
    prevDacxiPrice = response.data.dacxi.usd,
    prevEthPrice = response.data.ethereum.usd,
    prevAtomPrice = response.data.cosmos.usd,
    prevLuncPrice = response.data["luna-wormhole"].usd;
    
})

/* document.getElementById("searchButton").addEventListener("click", () => {
    const inputDate = document.getElementById("dateSearch").value 
    // inputDate estará no formato aaaa-mm-dd, converter pra unix
    const unixDate = (new Date(inputDate).getTime()/1000)

    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${unixDate}&to=${unixDate + 86400}`).then(response => {
        console.log(response.data)
    })

}) */

axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?date=20-12-2021").then(response => {
    console.log(`API Response: ${JSON.stringify(response.data)}`)
})

setInterval(async function() {
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,luna-wormhole,cosmos,dacxi&vs_currencies=usd")

    currBtcPrice = response.data.bitcoin.usd,
    currDacxiPrice = response.data.dacxi.usd,
    currEthPrice = response.data.ethereum.usd,
    currAtomPrice = response.data.cosmos.usd,
    currLuncPrice = response.data["luna-wormhole"].usd;

    if(currBtcPrice !== prevBtcPrice) btc.innerHTML = "$" + currBtcPrice; 
    if(currDacxiPrice !== prevDacxiPrice) dacxi.innerHTML = "$" + currDacxiPrice;
    if(currEthPrice !== prevEthPrice) eth.innerHTML = "$" + currEthPrice;
    if(currAtomPrice !== prevAtomPrice) atom.innerHTML = "$" + currAtomPrice;
    if(currLuncPrice !== prevLuncPrice) lunc.innerHTML = "$" + currLuncPrice;

    prevBtcPrice = response.data.bitcoin.usd,
    prevDacxiPrice = response.data.dacxi.usd,
    prevEthPrice = response.data.ethereum.usd,
    prevAtomPrice = response.data.cosmos.usd,
    prevLuncPrice = response.data["luna-wormhole"].usd;
},5000)

let myCoinData = []
function getDataFromId( coinId ){
  fetch(`https://api.coingecko.com/api/v3/coins/bitcoin%2C%20dacxi%2C%20ethereum%2C%20cosmos%2C%20luna-wormhole/market_chart?vs_currency=usd&days=1%2C7%2C30`)
     .then(response => response.json())
     .then(data => { 
         myCoinData.push(data.prices[0][1])
         myCoinData.push(data.market_caps[0][1])
         myCoinData.push(data.total_volumes[0][1])
})
}

getDataFromId( '' )
console.log(myCoinData)