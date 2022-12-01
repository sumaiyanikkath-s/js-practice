function findFactorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

var n = 5;
console.log(n+'! = '+ findFactorial(n));
/*
//function findFac(ftorial(n) {
	var a=parseInt(prompt("enter a number"));
    var factorial = 1;
    for (var i = 1; i <= a; i++) {
        factorial *= i;
 }   
//var n = 5;
//console.log(n+'! = '+ findFactorial(n));
console.log(factorial)
*/