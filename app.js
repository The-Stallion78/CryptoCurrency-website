var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

let settingsBtc = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
};

let settingsEth = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    "method": "GET",
    "headers": {}
};

let settingsDoge = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
};

$.ajax(settingsBtc).done(function (response) {
    // console.log('Bitcoin Price:', response);
    btc.innerHTML = response.bitcoin.usd;
});

$.ajax(settingsEth).done(function (response) {
    // console.log('Ethereum Price:', response);
    eth.innerHTML = response.ethereum.usd;
});

$.ajax(settingsDoge).done(function (response) {
    // console.log('Dogecoin Price:', response);
    doge.innerHTML = response.dogecoin.usd;
});
