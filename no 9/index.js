const bankAccount = {
  ownerName: `Paria Pileforooshha`,
  accountNumber: 6104337473063707,
  balance: 2000000,
  deposit: function (amount) {
    console.log(`${amount} toman variz shod.`);
    this.balance += amount;
  },
  withdraw: function (amount) {
    console.log(`${amount} toman bardasht shod.`);
    this.balance -= amount;
  },
  checkBalance: function () {
    console.log(`Your balance is: ${this.balance} toman.`);
  },
};

bankAccount.deposit(500000);

console.log(bankAccount.checkBalance());

bankAccount.withdraw(780000);

console.log(bankAccount.checkBalance());
