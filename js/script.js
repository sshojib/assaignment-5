const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-[#B4F461]');
    donationTab.classList.remove('bg-[#B4F461]');
});
// 1 number
const butonDonateNow = document.getElementById('donate-now');
butonDonateNow.addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-add-amount').value;
    console.log(inputAmount);

    if(inputAmount > 0){
        alert('Thank you for your donation.')
        const taka = document.getElementById('add-amount').innerText
        console.log(taka);
        const number = parseFloat(inputAmount);
        const number2 = parseFloat(taka);
        const totalAmount = number + number2
        console.log(totalAmount);
        document.getElementById('add-amount').innerText = totalAmount;
    }
    else{
        alert('Please enter a valid donation amount.')
    }
})

// 2 number
const buttonDonateNow = document.getElementById('button-donate-now');
buttonDonateNow.addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount-add').value;
    console.log(inputAmount);

    if(inputAmount > 0){
        alert('Thank you for your donation.')
        const taka = document.getElementById('balance-add').innerText
        console.log(taka);
        const number = parseFloat(inputAmount);
        const number2 = parseFloat(taka);
        const totalAmount = number + number2
        console.log(totalAmount);
        document.getElementById('balance-add').innerText = totalAmount;
    }
    else{
        alert('Please enter a valid donation amount.')
    }
})

// 3 number
const btnDonateNow = document.getElementById('btn-donate-now');
btnDonateNow.addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney = document.getElementById('input-amount').value;
    console.log(inputMoney);

    if(inputMoney > 0){
        alert('Thank you for your donation.')
        const balance = document.getElementById('balance').innerText
        console.log(balance);
        const number = parseFloat(inputMoney);
        const number2 = parseFloat(balance);
        const newBalance = number + number2
        console.log(newBalance);
        document.getElementById('balance').innerText = newBalance;
    }
    else{
        alert('Please enter a valid donation amount.')
    }
});



// 1 number
const btonDonateNow = document.getElementById('donate-now');
btonDonateNow.addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney = document.getElementById('input-add-amount').value;
    console.log(inputMoney);

    
        const balance = document.getElementById('current-amount').innerText
        console.log(balance);
        const number = parseFloat(inputMoney);
        const number2 = parseFloat(balance);
        const newBalance = number - number2
        console.log(newBalance);
        document.getElementById('current-amount').innerText = newBalance;

});
// 2 number
const butnDonateNow = document.getElementById('button-donate-now');
butnDonateNow.addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney = document.getElementById('input-amount-add').value;
    console.log(inputMoney);

    
        const balance = document.getElementById('current-amount').innerText
        console.log(balance);
        const number = parseFloat(inputMoney);
        const number2 = parseFloat(balance);
        const newBalance = number - number2
        console.log(newBalance);
        document.getElementById('current-amount').innerText = newBalance;

});

// 3 number
const bttnDonateNow = document.getElementById('btn-donate-now');
bttnDonateNow.addEventListener('click', function(event){
    event.preventDefault();
    const inputMoney = document.getElementById('input-amount').value;
    console.log(inputMoney);

        const balance = document.getElementById('current-amount').innerText
        console.log(balance);
        const number = parseFloat(inputMoney);
        const number2 = parseFloat(balance);
        const newBalance = number - number2
        console.log(newBalance);
        document.getElementById('current-amount').innerText = newBalance;
});





