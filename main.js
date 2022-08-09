const input = require("sync-input");

function convert() {
    const input = require('sync-input');
    const currencies = {
        USD: 1,
        EUR: 0.89,
        RUB: 74.36,
        JPY: 113.5,
        GBP: 0.75
    };
    console.log(`
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
    let userChoice = Number(input("What do you want to do?\n1-Convert currencies 2-Exit program\n"));
    while (userChoice !== 2) {
        if (userChoice === 1) {
            console.log("What do you want to convert?");
            let currencyFrom = input("From: ").toUpperCase();
            if (!(currencyFrom in currencies)) {
                userChoice = Number(input("Unknown currency\nWhat do you want to do?\n1-Convert currencies 2-Exit program\n"));
                continue;
            }
            let currencyTo = input("To: ").toUpperCase();
            if (!(currencyTo in currencies)) {
                userChoice = Number(input("Unknown currency\nWhat do you want to do?\n1-Convert currencies 2-Exit program\n"));
                continue;
            }
            let valueConvert = Number(input("Amount: "));
            if (valueConvert < 1) {
                userChoice = Number(input("The amount cannot be less than 1\nWhat do you want to do?\n1-Convert currencies 2-Exit program\n"));
                continue;
            } else if (isNaN(valueConvert)) {
                userChoice = Number(input("The amount has to be a number\nWhat do you want to do?\n1-Convert currencies 2-Exit program\n"));
                continue;
            }
            let result = ((currencies[currencyTo] / currencies[currencyFrom]) * valueConvert).toFixed(4);
            console.log(`Result: ${valueConvert} ${currencyFrom} equals ${result} ${currencyTo}`);
            userChoice = Number(input("What do you want to do?\n1-Convert currencies 2-Exit program\n"));
            continue;
        } else if (userChoice !== 1 && userChoice !== 2) {
            userChoice = Number(input("Unknown input\nWhat do you want to do?\n1-Convert currencies 2-Exit program\n"));
            continue;
        }
    }
    return "Have a nice day!";
}
console.log(convert());
