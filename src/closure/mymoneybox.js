/* logica sin closure tratando de ahorrar pero no guardar las monedas ahorradas
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins
    console.log(`moneyBox: ${saveCoins}`)
}

moneyBox(5);
moneyBox(5);
*/

// logica de ahorro usando clouseres si funcionando 

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins
        console.log(`moneyBox: ${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myMoneyBoxAna = moneyBox();

myMoneyBox(25);
myMoneyBox(35);
myMoneyBox(15);