// function target(arr, num) {
//  for (var i = 0; i < arr.length; i++) {
//   var res = arr[i];
//   for (var n = i + 1; n < arr.length; n++) {
//    var res1 = arr[n];
//    if (res + res1 == num) {
//     return [i, n];
//    }
//   }
//  }

// }

// const index = target([1, 2, 2, 7, 3, 9], 5) // [1,2]

// console.log(index);



//回文数
function target(num){

 var num = num+""
 var arr = num.split("");
 var a = arr.slice(0);
 var b = a.reverse();
 var res = b.join("");
 if(num == res){
  return true;
 }else{
  return false;
 }

}
var index= target(131);
console.log(index);