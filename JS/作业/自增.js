var n1 = 10;
var n2 = 20;

var n = n1++;

console.log("n=" + n); // 10
console.log("n1=" + n1);

n = ++n1;
console.log("n=" + n);
console.log("n1=" + n1);

n = n2--;
console.log("n=" + n);
console.log("n2=" + n2);

n = --n2;
console.log("n=" + n);
console.log("n2=" + n2);

n = n1++ + ++n1 - n2-- + ++n2 + n2++;
console.log(n, n1, n2);
