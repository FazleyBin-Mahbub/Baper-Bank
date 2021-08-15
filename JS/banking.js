// handle deposite button

document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the amount deposited
  const depositAmount = document.getElementById("deposit-amount");

  const newDepositValue = depositAmount.value;
  // update account deposit total
  const depositTotal = document.getElementById("deposit-total");
  const currentDepositAmount = depositTotal.innerText;
  const newDepositTotal =
    parseFloat(currentDepositAmount) + parseFloat(newDepositValue);

  depositTotal.innerText = newDepositTotal;

  // update account balance
  const balanceTotal = document.getElementById("balance-total");
  const currentBalanceAmount = balanceTotal.innerText;
  const newBalanceTotal =
    parseFloat(currentBalanceAmount) + parseFloat(newDepositValue);
  balanceTotal.innerText = newBalanceTotal;

  //clear the code deposit input
  depositAmount.value = "";
});

// handling withdraw event handler

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-amount");

  const withdrawAmountText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawAmountText);

  // set withdraw total

  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawText = withdrawTotal.innerText;

  const previousWithdrawTotal = parseFloat(previousWithdrawText);
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotal.innerText = newWithdrawTotal;
  withdrawInput.value = "";

  // update balance
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotal.innerText = newBalanceTotal;
});
