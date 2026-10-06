console.log("3" == 3);

let score = 3 * ((9 + 7) - 8 - 1);

console.log(typeof undefined );


// function checkGreater(a , b) {

//     if( a > b){
//         return a 
//     }else {
//         return b
//     }
// }

// function checkGreater(s1 , s2) {
//     return s1 === s2
// }

function checkVar(num) {
   if(isNaN(num)){
     return "enter num"
   }else{
     return "valid"
   }
}

console.log(checkVar("sdnjsk"));


function checkBool(params) {
    if(params){
       return "heeloo"
    }else{
        return "hehehe"
    }
}

function checkArray(params) {
    if(params.length === 0){
      return true
    }else{
      return false 
    }
}

console.log(checkArray([5]));
