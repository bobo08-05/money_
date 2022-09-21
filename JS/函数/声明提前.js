 /*
  变量的声明提前
    
    -使用var关键字声明的变量，会在所有的代码执行之前被声明(但是不会赋值)，
    但是如果声明变量时不适用var关键字，则变量不会被声明提前

 函数的声明提前
    
    -使用函数声明形式创建的函数function函数(){}
    它会在所有的代码执行之前就被创建，所以我们可以在函数声明前来调用函数
    使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用

 */


console.log(fun2);
// 不会被声明提前
var fun1 = function () {
 console.log(123);
 return 123
}
console.log(fun1);
// 会被声明提前
function fun2() {
 console.log(456);
 return 456
}

function fun3() {
 return 456
}

function fun4(a) {
 console.log(a);
}

function fun5(a) {
 console.log(a);
}

const value = fun3()
const value1 = fun5()

console.log(value); // 456
console.log(value1); // undefined

fun4(fun3()) // 456

fun4(fun3) // Function

fun4(fun5(5)) // undefined

fun4(fun5) // Function