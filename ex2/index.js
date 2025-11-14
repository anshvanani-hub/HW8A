import { Account } from './accounting.js';

const myAccount = new Account('Jeff');
myAccount.credit(150);
console.log(myAccount.describe());

// Additional sample data
const alice = new Account('Alice');
alice.credit(99.99);
console.log(alice.describe());


