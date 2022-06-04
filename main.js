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

setInterval(function() {
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
    
})},5000)