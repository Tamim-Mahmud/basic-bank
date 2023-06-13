document.getElementById('deposit-button').addEventListener('click',function(){
    const newDepositAmmount=parseFloat(document.getElementById('deposit-field').value);
    // console.log(newDepositAmmount);
    const previousDeposit= parseFloat(document.getElementById('previous-deposit').innerText);
    const previousBalance=parseFloat(document.getElementById('previous-balance').innerText);
    // console.log(previousDeposit);
   

    const newDeposit = newDepositAmmount + previousDeposit;
    // console.log(newDeposit);
    if(!isNaN(newDepositAmmount) && newDepositAmmount>0){
        document.getElementById('previous-deposit').innerText= newDeposit;
        document.getElementById('previous-balance').innerText= previousBalance + newDepositAmmount;
    }
    else{
        alert('Please enter valid ammount');
    } document.getElementById('deposit-field').value='';
});
document.getElementById('withdraw-button').addEventListener('click',function(){
    const newWithdrawAmmount=parseFloat(document.getElementById('withdraw-field').value);
    console.log(newWithdrawAmmount);
    const previousWithdraw= parseFloat(document.getElementById('previous-withdraw').innerText);
    const previousBalance=parseFloat(document.getElementById('previous-balance').innerText);
    console.log(previousWithdraw);
   

    const newWithdraw = newWithdrawAmmount + previousWithdraw;
    // console.log(newDeposit);
    if(!isNaN(newWithdrawAmmount)  && newWithdrawAmmount>0 && previousBalance >= newWithdrawAmmount){
        document.getElementById('previous-withdraw').innerText = newWithdraw;
        document.getElementById('previous-balance').innerText= previousBalance - newWithdrawAmmount;
    }
    else{
        alert('Please enter valid ammount !');
    } document.getElementById('withdraw-field').value='';
});
document.getElementById('logout-btn').addEventListener('click')