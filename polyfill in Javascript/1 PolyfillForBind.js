/**
 * polyfill for bind - Here we are expected to write our own method for bind() function
 */

//This is a generic function that prints your name and other details
const printName = function (city, state) {
  console.log('My name is ', this.firstName, ' I am from ', city, ' belongs to this ', state)
}

//our own bind method called myBind
/**
 * 
 * @param  args - this parameter holds all the value passed to mybind function
 * argument2 - holds all the parameters that are passed to the returned function from bind
 * @returns 
 */
Function.prototype.myBind = function (...args) {
  //this - holds the function name that is to be called
  let obj = this

  //slicing will fetch us only the arguments and not he object on which bind is being called
  parameters = args.slice(1)
  
  //argument2 - holds all the parameters that are passed to the function returned by bind method
  return function (...argument2) {
    obj.apply(args[0],[...parameters, ...argument2])
  }
}

let person = {
  firstName: 'Shreyas'
}


// printName.bind(person, 'Bengaluru', 'Karnataka')()

let print = printName.myBind(person, 'Milkyway')
print('Universe')