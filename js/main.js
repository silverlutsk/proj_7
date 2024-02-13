const a = +prompt('Enter first number')
const b = +prompt('Enter second number')
const c = +prompt('Enter third number')
const d = +prompt('Enter four number')

function sum(a,b,c,d) {
     let total = 0
     for(let i = 0; i < arguments.length; i++){
         console.log(arguments[i]);
         total += arguments[i]
     }
     return total
    }
    
 console.log(sum(a,b,c,d));
 alert(sum(a,b,c,d))