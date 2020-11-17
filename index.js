// Code your solutions in this file
function writeCards (name, message) {
    const newArr = [];
    for (let i = 0; i < name.length; i++) {
      newArr.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`)
    }
    return newArr;
  }


function countDown(num) {
    let counter = num
     while (counter >= 0 ) {
         console.log(counter);
         counter--
     }
    }