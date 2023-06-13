document.getElementById('deposit-button').addEventListener('click', function () {

    const newDepositAmmount = getElementValueOrText('deposit-field');
    const previousDeposit = getElementValueOrText('previous-deposit');
    const previousBalance = getElementValueOrText('previous-balance');

    if (!isNaN(newDepositAmmount) && newDepositAmmount > 0) {
        setElementText('previous-deposit', newDepositAmmount + previousDeposit);
        setElementText('previous-balance', previousBalance + newDepositAmmount);
    }
    else {
        alert('Please enter valid ammount');
    }
    document.getElementById('deposit-field').value = '';
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmmount = getElementValueOrText('withdraw-field');
    const previousWithdraw = getElementValueOrText('previous-withdraw');
    const previousBalance = getElementValueOrText('previous-balance');


    const newWithdraw = newWithdrawAmmount + previousWithdraw;
    if (!isNaN(newWithdrawAmmount) && newWithdrawAmmount > 0 && previousBalance >= newWithdrawAmmount) {
        setElementText('previous-withdraw', newWithdraw);
        setElementText('previous-balance', previousBalance - newWithdrawAmmount);
    }
    else {
        alert('Please enter valid ammount !');
    }
     document.getElementById('withdraw-field').value = '';
});
