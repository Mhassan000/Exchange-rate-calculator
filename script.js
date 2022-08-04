//GET DOM ELEMENTS
const currencyOne = document.getElementById('currency-one');
const amountOne  = document.getElementById('amount-one');
const currencytwo = document.getElementById('currency-two');
const amountTwo  = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update the DOM
function calculate(){
    // console.log('success');
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencytwo.value;
    // console.log(currencyOneCode,currencyTwoCode);
    fetch(` https://v6.exchangerate-api.com/v6/1a944e17a7e0cdb4e6b0fdaa/pair/${currencyOneCode}/${currencyTwoCode}`)
    .then(res => res.json())
    .then(data => {
        const conversionRate = data.conversion_rate;
        rate.innerText = (` 1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`) ;
        amountTwo.value = (amountOne.value * conversionRate).toFixed(2)
    })

};

//Event Listeners
currencyOne.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
currencytwo.addEventListener('change',calculate);
amountTwo.addEventListener('input',calculate);
swap.addEventListener('click', ()=>{
    const temp = currencyOne.value
    currencyOne.value =  currencytwo.value
    currencytwo.value = temp;
    calculate();
})


//Event listeners for icom 
let icon = document.getElementById('icon');
icon.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')){
        icon.src = "sun.png";
    }
    else{
        icon.src = "moon.png";
    }
})
//Execute function on page reload 
calculate();