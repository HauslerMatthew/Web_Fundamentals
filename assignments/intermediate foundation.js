//Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
    var sigma = 0;
    for(var i=0; i<=num; i++){
        sigma+=i;
    }
    console.log(sigma);
    return sigma;
}

sigma(4);
sigma(9);


//Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
    var factor = 1;
    for(var i=1; i<=num; i++){
        factor=factor*i;
    }
    console.log(factor);
    return factor;
}

factorial(3);
factorial(5);


//Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacciNumber(num){
    var a = 0;
    var b = 1;
    var fib;
    
    while(num>=0){
        fib = a;
        a += b;
        b = fib;
        num--;
    }
    console.log(b)
    return b;
}
fibonacciNumber(0);
fibonacciNumber(1);
fibonacciNumber(3);
fibonacciNumber(7);


//Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondtoLast(arr){
    if(arr.length<2){
        console.log(null);
        return null;
    }
    else{
        console.log(arr[arr.length-2]);
        return arr[arr.length-2];
    }
}
secondtoLast([42,3,4,1,7]);


//Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthtoLast(arr, num){
    if(arr.length<num){
        console.log(null);
        return null;
    }
    else{
        console.log(arr[arr.length-num]);
        return arr[arr.length-num];
    }
}
nthtoLast([5,2,3,6,4,9,7],8);


//Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr){
    if(arr.length<2){
        console.log(null);
        return null;
    }
    else{
        var max=arr[0];
        for(var i=0; i<arr.length; i++){
            if(arr[i]>max){
                max=arr[i];
            }
        }
        var second=-Infinity;
        for(var i=0; i<arr.length; i++){
            if(arr[i]==max){
                arr[i]=null;
            }
            else if(arr[i]>second){
                second=arr[i];
            }
        }
        console.log(second);
        return second;
    }
}
secondLargest([42,1,4,3.14,7]);


//Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].


function doubleElements(arr){
    var b=[];
    for(var i=0; i<arr.length; i++){
        b.push(arr[i]);
        b.push(arr[i]);
    }
    console.log(b)
}
doubleElements([4, "Ulysses", 42, false]);