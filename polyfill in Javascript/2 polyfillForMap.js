/**
 * Write your own implementation for Array.map function
 */

/**
 * 
 * @param {*} callback - here callback has 3 arugments, 
 * a. value of the array
 * b. index of the element
 * c. the array itself 
 * @returns 
 */
Array.prototype.newMap = function (callback) {
  const result = []
  //this holds the array chars
  for (let i = 0; i < this.length; i++){
    if (this.indexOf(this[i]) > -1) {      
      //here control goes back to line 26, executes line 27 and returns the control back here and append the manipulated value to result array. New function entry made in call stack
      result[i] = callback(this[i], i, this)      
    }
  }
  return result;
}



// sample array
const chars = ['a','b','c','d']
chars[10] = 'j';

//double will be assigned only after all the array are iterated through
const double = chars.newMap((item, index, obj) => {
  console.log(item+' alphabet '+obj)
})


console.log(double)