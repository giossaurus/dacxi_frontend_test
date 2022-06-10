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

setInterval(async function() {
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,luna-wormhole,cosmos,dacxi&vs_currencies=usd")

    currBtcPrice = response.data.bitcoin.usd,
    currDacxiPrice = response.data.dacxi.usd,
    currEthPrice = response.data.ethereum.usd,
    currAtomPrice = response.data.cosmos.usd,
    currLuncPrice = response.data["luna-wormhole"].usd;

    if(currBtcPrice !== prevBtcPrice) {
        btc.innerHTML = "$" + currBtcPrice;
        btc.animate([
            {}
        ]) 
    }    
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

let myCoinData = {
    bitcoin: [],
    dacxi: [],
    ethereum: [],
    cosmos: [],
    "luna-wormhole":[]
}

const coinIds = ['bitcoin', 'dacxi', 'ethereum', 'cosmos', 'luna-wormhole']

async function getData(){
  for (let coin of coinIds){
    fetchCoinDataById(coin)
  }

  const ctx = document.getElementById('chart').getContext('2d');
        const xlabels = [];
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', 'Today'],
                datasets: [{
                    label: 'Bitcoin',
                    data: myCoinData.bitcoin,
                    tension: 0.3,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Dacxi',
                    data: myCoinData.dacxi,
                    tension: 0.3,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Ethereum',
                    data: myCoinData.ethereum,
                    tension: 0.3,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Cosmos',
                    data: myCoinData.cosmos,
                    tension: 0.3,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Luna',
                    data: myCoinData["luna-wormhole"],
                    tension: 0.3,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }   
            ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        type: "logarithmic",
                        
                    },
                    x: {
                        beginAtZero: true,
                        title: {
                            display:true,
                            text: 'Months ago'
                        }
                    }
                }
            }
        });
}


async function fetchCoinDataById( coinId ){
    return fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=84&interval=daily`)
    .then(response => response.json())
    .then(data => { 
        for (let i=0; i <= 84; i+=7){
            myCoinData[coinId].push(data.prices[i][1])
        }

        console.log(`fetching data for ${coinId}: ${JSON.stringify(data, null, 2)}`)
})
}

getData()
console.log(myCoinData)

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}