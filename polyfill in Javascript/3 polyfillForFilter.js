Array.prototype.newFilter = function (callback, context) {
  
  const result = [];
  for (let i = 0; i < this.length; i++) {
    /**
     * if we do not use context, we can just use callback()
     * if we use context then we have to call callback.call()
     * 
     * normal callback() is as follows:
     * if (callback(this[i], i, this)) {      
        result.push(this[i])      
    }
     */
    if (callback.call(context, this[i], i, this)) {     
      /**
       * here we dont use result[i] = this[i] due to if condition, for empty indexes it create empty array and returns
       * 
       * so we use result.push instead
       */
        result.push(this[i])      
    }
  }
  return result
}
// example
const numbers = [1, 2, 3, 4]
const even = numbers.newFilter((item) => {  
  /**
   * equivalent statement can be newFilter(item => item%2 === 0)
   */
  if (item % 2 === 0) {
    return item
  }
})
console.log(even)