/*

function introduction(){
    const name= prompt(`What is your name/\`s?`);
    document.write(`Nice to meet you ` + name);
}

introduction();

*/

/*
function sign(display){
    document.write(`Thank you for enabling me ` + display + `!`);
}

function input(){
    const name = prompt(`Enter your name to enable the text in your screen...`);
    
    sign(name);
}

input();

*/

function max(nr1, nr2){
    
    if (nr1 > nr2){
        return nr1;
    } else {
        return nr2 * 3 ;
    }

}

const number = max(1,4);
console.log(number);
