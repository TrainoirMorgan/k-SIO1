console.log("script loaded");

// On récupère les éléments de notre calculatrice

const buttons = document.querySelectorAll("button");
console.log("buttons => ", buttons);

const screen = document.querySelector(".screen");
console.log("screen => ", screen);

const history = document.querySelector(".history");
console.log("history => ", history);

// On définit les variables utiles

let firstOperand = "";
let lastOperand = "";
let operator = "";

// On ajoute un écouteur d'événement à chaque bouton

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonContent = e.target.innerText;
        // Si c'est un chiffre, on l'ajoute à l'opérande en cours
        if (!isNaN(buttonContent || buttonContent === ".")){
            if (operator === ""){
                firstOperand += buttonContent;
                screen.innerText = firstOperand;
            }else{
                lastOperand += buttonContent;
                screen.innerText = lastOperand;
            }
        }
        if(buttonContent === '+' || buttonContent === '-' || buttonContent === '*' || buttonContent === '/'){
            operator = buttonContent;
        }
        if ((buttonContent === '+' || buttonContent === '-' || buttonContent === '*' || buttonContent === '/') && (operator === '+' || operator === '-' || operator === '*' || operator === '/')) {
            screen.innerText = eval(`${firstOperand}${operator}${lastOperand}`);
            firstOperand = eval(`${firstOperand}${operator}${lastOperand}`);
            lastOperand = "";
            operator = buttonContent;
        }
        if(buttonContent === '='){
            screen.innerText = eval(`${firstOperand}${operator}${lastOperand}`);
            firstOperand = eval(`${firstOperand}${operator}${lastOperand}`);
            lastOperand = "";
        }
        if (buttonContent === 'C') {
            firstOperand = "";
            lastOperand = '';
            operator = '';
            screen.innerText = '0';
        }
        console.log('firstOperand => ', firstOperand)
        console.log('lastOperand => ', lastOperand)
        console.log('operator => ', operator)

        
    });
});

// buttons.forEach((button) => {
//     console.log(button);
//     button.addEventListener("click", ecoute)
// });

// function ecoute (e){
//     console.log(e);
// }


