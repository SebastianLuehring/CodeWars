// Calculate average




// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.



// Solution:


function find_average(array) {
    if(array.length === 0){
       return 0
    }else{
       return array.reduce((a,b) => a + b, 0) / array.length
    }
    }
    
    
    function find_average(arr) {
        return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
    }

    