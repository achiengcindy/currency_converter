fetch('https://free.currencyconverterapi.com/api/v5/currencies')
.then((response) => response.json()) // Transform the data into json
.then((response) => {
    Object.entries(response.results).forEach(([key, value]) => {
        let fromOption = new Option(`${value.currencyName} (${value.currencySymbol})`, key);
        let toOption = new Option(`${value.currencyName} (${value.currencySymbol})`, key);
        from.add(fromOption);
        to.add(toOption);
    });
});