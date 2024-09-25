







// blog-button
document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('quizContainer').classList.remove('hidden');
    loadQuestions();
});
function loadQuestions() {
    const questions = [
        " What is DOM?",
        "How do you select an element from the DOM?",
        "What is event delegation in the contaxt of the DOM?",
        "How do you manipulate an element's attributes an styles using the DOM?"
    ];

    const questionsContainer = document.getElementById('questions');
    questions.forEach((question, index) => {
        const questionP = document.createElement('p');
        questionP.className = 'text-left';
        questionP.innerHTML = `<label>${question}</label>
        <input type="text" id="answer${index}" class=" px-2 py-1" placeholder="Your answer"></input>
        `;
        
        questionsContainer.appendChild(questionP);
    });
}
// hidden-part
document.getElementById('history-tab').addEventListener('click', function() {
    document.getElementById('historyList').classList.remove('hidden');
});

document.getElementById('donation-tab').addEventListener('click', function() {
    document.getElementById('historyList').classList.add('hidden');
});
// history-button-donation-button
document.getElementById('history-tab').addEventListener('click', function() {
    document.getElementById('donate-bangladesh').classList.add('hidden');
    document.getElementById('historyList').classList.remove('hidden');
});

document.getElementById('donation-tab').addEventListener('click', function() {
    document.getElementById('historyList').classList.add('hidden');
    document.getElementById('donate-bangladesh').classList.remove('hidden'); 
});


// button-color-change
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-[#B4F461]');
    donationTab.classList.remove('bg-[#B4F461]');

    
    document.getElementById('donate-bangladesh').classList.add('hidden');
    
});
const donateTab = document.getElementById('donation-tab');
donateTab.addEventListener('click', function(event){
    donateTab.classList.add('bg-[#B4F461]');
    historyTab.classList.remove('bg-[#B4F461]');

})
  

// 1


const buttonDonateNow = document.getElementById('donate-now')
buttonDonateNow.addEventListener('click', function(event) {
event.preventDefault();
    let currentAmount = parseFloat(document.getElementById('current-amount').innerText);
    let donationAmount = parseFloat(document.getElementById('input-add-amount').value);
    
    
    if (donationAmount > 0 && donationAmount <= currentAmount) {
         alert('Thank you for your donation.')
        currentAmount -= donationAmount;
        document.getElementById('current-amount').textContent = currentAmount;
        document.getElementById('input-add-amount').value = '';
        document.getElementById('add-amount').innerText = donationAmount;
    } else {
        alert("Please enter a valid donation amount.");
    }
});
// 2
const butnDonateNow = document.getElementById('button-donate-now') 
butnDonateNow.addEventListener('click', function(event) {
    event.preventDefault();
    let currentAmount = parseFloat(document.getElementById('current-amount').innerText);
    let donationAmount = parseFloat(document.getElementById('input-amount-add').value);
    
    
    if (donationAmount > 0 && donationAmount <= currentAmount) {
        alert('Thank you for your donation.')
        currentAmount -= donationAmount;
        document.getElementById('current-amount').textContent = currentAmount;
        document.getElementById('input-amount-add').value = '';
        document.getElementById('balance-add').innerText = donationAmount;
    } else {
        alert("Please enter a valid donation amount.");
    }
});
// 3
const btnDonateNow = document.getElementById('btn-donate-now')
btnDonateNow.addEventListener('click', function(event) {
event.preventDefault();
    let currentAmount = parseFloat(document.getElementById('current-amount').innerText);
    let donationAmount = parseFloat(document.getElementById('input-amount').value);
    
    if (donationAmount > 0 && donationAmount <= currentAmount) {
        alert('Thank you for your donation.')
        currentAmount -= donationAmount;
        document.getElementById('current-amount').textContent = currentAmount;
        document.getElementById('input-amount').value = '';
        document.getElementById('balance').innerText = donationAmount;
    } else {
        alert("Please enter a valid donation amount.");
    }
});
// //////s
document.getElementById('donate-now').addEventListener('click', function() {
    
    let donationAmount = parseInt(document.getElementById('input-add-amount').value);
    
    
    let currentDate = new Date().toLocaleString();

    
    if (donationAmount > 0) {
        
        let historyItem = document.createElement('li');
        historyItem.className = 'bg-white rounded-lg shadow-lg p-5 mx-auto mt-4 w-[900px] font-semibold';
        historyItem.innerHTML = `${donationAmount} Taka is donated for Donate for Flood at Noakhali, Bangladesh
            <p class="text-[#4e4e4e]">Date: ${currentDate}</p>`;

        
        document.getElementById('historyList').appendChild(historyItem);

        
        document.getElementById('input-add-amount').value = '';
    }
});
document.getElementById('history-tab').addEventListener('click', function() {
    const historyList = document.getElementById('historyList');
    historyList.classList.toggle(''); 
});










