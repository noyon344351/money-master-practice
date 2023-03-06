function getAmount(amount)
{
    const amountField=document.getElementById(amount);
    const amountFieldString=amountField.value;
    const amountFieldValue=parseFloat(amountFieldString);
    amountField.value='';
    return amountFieldValue;
}
function getExpensesBalance(value)
{
    const totalField=document.getElementById(value);
    const totalFieldString=totalField.innerText;
    const totalFieldValue=parseFloat(totalFieldString);
    return totalFieldValue;
}

document.getElementById('btn-calculate').addEventListener('click',function(){
    const incomeTotal=getAmount('income-field');
    const food=getAmount('food-field');
    const rent=getAmount('rent-field');
    const cloths=getAmount('cloth-field');
    const totalCost=food+rent+cloths;
    
    const totalExpense=document.getElementById('total-expenses');
    totalExpense.innerText=totalCost;
    const Balance=document.getElementById('balance');
    Balance.innerText=incomeTotal-totalCost;
    
})

document.getElementById('btn-save').addEventListener('click',function(){
    const percentSave=getAmount('save-field');
    
    


    const totalBalance=document.getElementById('balance');
    const totalBalanceString=totalBalance.innerText;
    const totalBalanceValue=parseFloat(totalBalanceString);

    const Save=totalBalanceValue*(percentSave/100);
    const Remain=totalBalanceValue-Save;

    
  //Saving and Remaining 

  const saving=document.getElementById('saving-amount');
  const remaining=document.getElementById('remaining-amount');
  saving.innerText=Save;
  remaining.innerText=Remain;
    

})