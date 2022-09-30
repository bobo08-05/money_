const info = [{ name: 'liu', age: 18 }, { name: 'xu', age: 17 }]

function copyForEach(callback) {
 for (let i = 0; i < this.length; i++) { 
  callback(this[i], i, this)
 }
}

Array.prototype.forEach = copyForEach

info.forEach(function (value, index, arr) {

 console.log(value, index, arr);
 if (index === 0) value.name = 'zhang'
})

console.log(info);
