console.log('The money tree');
var balanceSavings = 0;
var balanceChecking = 0;
//buttons
var savingsDepositBtn = document.querySelector('.savings-dp-btn')
var savingsWithdrawalBtn = document.querySelector('.savings-wd-btn')
var checkingDepositBtn = document.querySelector('.checking-dp-btn')
var checkingWithdrawalBtn = document.querySelector('.checking-wd-btn')
//user input
var userInputSavings = document.querySelector('#amount-savings')
var userInputChecking = document.querySelector('#amount-checking')
var resultSavingsBal = document.querySelector('#savingsbal-div')
var resultCheckingBal = document.querySelector('#checkbal-div')


var deposit = function(amount, balance) {
  return balance + amount;
};

var withdrawal = function(amount, balance) {
  return balance - amount;
};

savingsDepositBtn.addEventListener('click', function() {
  balanceSavings = deposit(Number(userInputSavings.value), balanceSavings);
  resultSavingsBal.textContent = '$' + balanceSavings;
});

savingsWithdrawalBtn.addEventListener('click', function() {
  balanceSavings = withdrawal(Number(userInputSavings.value), balanceSavings);
  resultSavingsBal.textContent = '$' + balanceSavings;
});

checkingDepositBtn.addEventListener('click', function() {
  balanceChecking = deposit(Number(userInputChecking.value), balanceChecking);
  resultCheckingBal.textContent = '$' + balanceChecking;
});

checkingWithdrawalBtn.addEventListener('click', function() {
  balanceChecking = withdrawal(Number(userInputChecking.value), balanceChecking);
  resultCheckingBal.textContent = '$' + balanceChecking;
});
