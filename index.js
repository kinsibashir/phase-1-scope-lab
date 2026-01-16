// Write your solution in this file!

// global variable
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newCustomer) {
  window.bestCustomer = newCustomer;
}

// constant variable
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // this MUST throw an error
  leastFavoriteCustomer = 'someone else';
}
