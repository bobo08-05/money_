var n1 = 10;
var n2 = 20;

var n = n1++;

console.log("n=" + n); // 10
console.log("n1=" + n1);// 11

n = ++n1;
console.log("n=" + n);//12
console.log("n1=" + n1);//13 12

n = n2--;
console.log("n=" + n);//20
console.log("n2=" + n2);//19

n = --n2;
console.log("n=" + n);//19 18
console.log("n2=" + n2);//19 18

//12+14-18+18+18

n = n1++ + ++n1 - n2-- + ++n2 + n2++;
console.log(n, n1, n2);//44 14 19
