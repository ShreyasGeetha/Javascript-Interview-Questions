/**
 * Write your own implementation for Array.map function
 */

let arr = [1, 2, 3, 4]

Array.prototype.myMap = function () {
  let arr = []
  for (let i = 0; i < this.length; i++){
    arr.push(this[i])
  }
  return arr
}

arr.myMap((val,index)=>console.log('hello ',val))
