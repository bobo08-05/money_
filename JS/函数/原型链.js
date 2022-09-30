function Persion(name, age) {
 this.name = name
 this.age = age
}



// 1.改变this指向到new的对象上
// 2.创建一个空对象


const per1 = new Persion('我',18)
console.log(per1.__proto__ === Persion.prototype);
// console.log(Persion.prototype);
// console.log(Persion.__proto__);