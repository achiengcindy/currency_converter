fetch('https://free.currencyconverterapi.com/api/v5/currencies')
.then((response) => response.json()) // Transform the data into json
.then((response) => {
    console.log('OK');
     let from = document.getElementById("from");
     Object.entries(response.results).forEach(([key, value]) => {
         console.log(value);
         let option = new Option(`${value.currencyName} (${value.currencySymbol})`, key);
         from.add(option);
        });
    });