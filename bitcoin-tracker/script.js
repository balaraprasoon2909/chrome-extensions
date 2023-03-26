const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const getResults = async function () {
    const options = {
        method: "GET"
    };

    const res = await fetch(url, options);
    const records = await res.json();
    console.log(records);

    const container = document.getElementById("container");

    const usdPrice = document.createElement("li");
    const usd = records.bpi.USD.rate;
    usdPrice.innerHTML = `Price in USD : <b>$${usd}<b>`
    container.appendChild(usdPrice);

    const eurPrice = document.createElement("li");
    const eur = records.bpi.EUR.rate;
    eurPrice.innerHTML = `Price in EUR : <b>€${eur}<b>`
    container.appendChild(eurPrice);

    const gbpPrice = document.createElement("li");
    const gbp = records.bpi.GBP.rate;
    gbpPrice.innerHTML = `Price in EUR : <b>£${gbp}<b>`
    container.appendChild(gbpPrice);

    const timeStamp = document.createElement("p");
    timeStamp.innerHTML = `This information was updated on <b>${records.time.updateduk.split('at')[0]}</b> at <b>${records.time.updateduk.split('at')[1]}</b>`;
    container.appendChild(timeStamp);
}

getResults();