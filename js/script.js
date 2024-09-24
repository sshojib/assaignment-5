

document.getElementById('btn-donate-now')
.addEventListener('click', function(event){
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



