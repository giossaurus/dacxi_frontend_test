var btc = document.getElementById("bitcoin");
var dacxi = document.getElementById("dacxi");
var eth = document.getElementById("ethereum");
var atom = document.getElementById("cosmos");
var lunc = document.getElementById("luna-wormhole");


var liveprice = {
    "async" : true,
    "scrossDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin.dacxi.ethereum.cosmos.luna-wormhole&vs_currencies=usd",

    "method" : "GET";
    "headers" : {}
}

$.ajax(liveprice).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    dacxi.innerHTML = response.dacxi.usd;
    eth.innerHTML = response.ethereum.usd;
    atom.innerHTML = response.cosmos.usd;
    lunc.innerHTML = response.luna.usd;
});