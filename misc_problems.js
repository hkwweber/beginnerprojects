//for fun problems from here: https://github.com/karan/Projects

// Collatz Conjecture - Start with a number n > 1. Find the number of steps it takes to reach one using the following process: If n is even, divide it by 2. If n is odd, multiply it by 3 and add 1

function collatz(n) {
  var steps = 0;
  while (n !==1) {
    if (n%2) {
      console.log('odd: ',n);
      n = (n*3) +1;
      steps ++;
    }
    else {
      console.log('even: ',n);
      n = n/2;
      steps++;
    }
  }
  return steps;
}

// collatz(200);

//count words in a string:
function countWords(str) {
  return str.split(' ').length;
}

// countWords('my name is high school hannah and i go to the mall like literally all the time i just looooove the mall');

// pig latin





function pigLatin(str) {
  var firstPart;
  var vowels = 'aeiou'
  for (var i = 0; i < vowels.length; i++) {
    if (str[1] === vowels[i]) {
      firstPart = str[0];
      break;
    }
    else {
      firstPart = str.slice(0,2);
    }
  }
  str = str.slice(firstPart.length) + '-' + firstPart + 'ay';
  return str;
}

function pigLatinSentence(str) {
  var arr = str.split(' ');
  var resultArr = [];
  arr.forEach(function(el) {
    resultArr.push(pigLatin(el));
  });
  return resultArr.join(' ');
}

// pigLatinSentence('hello my name is hannah');

// pigLatin('banana');
// pigLatin('charlie');


//bank account
var myAccounts = {checking: 1000, savings: 5000, credit: 500};

function spend(account,amount) {
  if (account === 'credit') {
    myAccounts[account]+= amount;
  }
  else {
    myAccounts[account] -= amount;
  }
  console.log('new ' + account + ' balance: $' + myAccounts[account]);
  return myAccounts;
  
}

function deposit(account,amount) {
  if (account === 'credit') {
    myAccounts[account]-= amount;
  }
  else {
    myAccounts[account] += amount;
  }
  console.log('new ' + account + ' balance: $' + myAccounts[account]);
  return myAccounts;
   }
   
   
function bank(action,account,amount) {
  return action(account,amount);
}   

// spend('checking',100);
// deposit('checking',200);
// bank(spend,'checking',500);
