// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



// Solution:

let countSheep = function (num){
    let amountSheep = '';
    for(i = 1; i <= num; i++) {
        amountSheep += (`${i} sheep...`) 
    }
    return (amountSheep);
} 