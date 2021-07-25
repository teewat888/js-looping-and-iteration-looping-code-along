// Code your solutions in this file
const writeCards = (names,eventName)=>{
    const cardMsg = [];
    for(let i = 0; i < names.length; i++){
        cardMsg[i] = 'Thank you, '+names[i]+', for the wonderful '+eventName+' gift!'; 
    }
    return cardMsg
}

const countDown = (n)=>{
    while(n >= 0){
        console.log(n);
        n--;
    }
}