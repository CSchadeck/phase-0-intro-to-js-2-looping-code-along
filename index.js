function writeCards(names, event) {
    let message = [];
    for(let i= 0; i< names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
 } 
return message;
}
//countdown v

function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }
}
