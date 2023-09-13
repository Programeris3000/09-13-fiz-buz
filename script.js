function fizzBuzz(){

for (let i = 1; i <= 100; i++){
let output = ``
  
  if(i % 3 === 0){
  output = output + `Fizz`
  }
  if(i % 5 === 0){
  output = output + `Buzz`
  }
  if(i % 7 === 0){
  output = output + `Biff`
  }
  if(i % 9 === 0){
  output = output + `Fuzz`
  }
  if(i % 11 === 0){
  output = output + `Bizz`
  }
  if(!output){
    output = i
  }

console.log(output)
}
}
fizzBuzz()