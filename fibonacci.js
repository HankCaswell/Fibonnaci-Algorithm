function fibonacci(num) {
  if (num <= 1) {
    return num
  }
    else if(num === 2){
      return 1
    }

  else {
    return fibonacci(num-1) + fibonacci(num-2)
  }
}


console.log(fibonacci(0))
console.log(fibonacci(3))
console.log(fibonacci(7))





module.exports = fibonacci;
