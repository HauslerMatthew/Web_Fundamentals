// Please work on the following challenges and upload your work in a single file.


// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function oneto255(){
    var arr = [];
    for(var i=1; i<256; i++){
        arr.push(i);
    }
    return arr;
}
var consoleArr=oneto255();
console.log(consoleArr)


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function evenSum(){
    var sum=0;
    for(var i=1; i<=1000; i++){
        if (i%2==0){
            sum+=i
        }
    }return sum;
}

var consoleSum=evenSum();
console.log(consoleSum);

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function oddSum(){
    var sum=0;
    for(var i=1; i<=5000; i++){
        if (i%2==1){
            sum+=i
        }
    }return sum;
}

var consoleSum=oddSum();
console.log(consoleSum);

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterateArr(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i]
    }return sum;
}

var consoleSum=iterateArr([1,2,5])
console.log(consoleSum);

var consoleSum=iterateArr([-5,2,5,12])
console.log(consoleSum);

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function getMax(arr){
    var max= arr[0];
    for(var i=0; i<arr.length; i++){
        if (max<arr[i]){
            max=arr[i]
        }
    }return max;
}

var consoleMax=getMax([-3,3,5,7]);
console.log(consoleMax);

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function getAvg(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    return avg;
}

var consoleAvg=getAvg([1,3,5,7,20]);
console.log(consoleAvg);

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArr(){
    var arr=[];
    for(var i=0; i<51; i++){
        if (i%2==1){
            arr.push(i)
        }
    } return arr;
}

var odds=oddArr();
console.log(odds);

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr, Y){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        if (arr[i]>Y){
            sum+=1
        }
    }return sum;
}

var consoleGreater=greaterThanY([1, 3, 5, 7], 3);
console.log(consoleGreater);

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squared(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i]*arr[i]
    } return arr;
}

var consoleSqare=squared([1,5,10,-2]);
console.log(consoleSqare);

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function zeroNegatives(arr){
    for(var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=0;
        }
    }return arr;
}

var arrZero=zeroNegatives([1,5,10,-2])
console.log(arrZero);

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function MaxMinAvg(arr){
    var max=arr[0];
    var min=arr[0];
    var sum=0;
    for(var i=0; i<arr.length; i++){
        if (arr[i]>max){
            max=arr[i];
        }
        if (arr[i]<min){
            min=arr[i];
        }
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    var arrnew=[max, min, avg];
    return arrnew;
}

var consoleArr=MaxMinAvg([1,5,10,-2])
console.log(consoleArr);

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swaps(arr){
    var temp=arr[0];
    arr[0]=arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

var swapped=swaps([1,5,10,-2]);
console.log(swapped);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function dojoNegative(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
        arr[i] = 'Dojo'
        }
        
    }return arr;
}

var newarr=dojoNegative([-1,-3,2]);
console.log(newarr);