//use("strict")//esto sirve para hacer ser estrictos para que todo quede bien,ejemplos como ; o cosas a asi
//el char float y eso si se pueden poner igual
console.log("Hello,word!!");
let isma = 1;//let es una variable concreta
var yanes = 2.0;//var es una variable global
if (yanes > 1) {
    var maria = false;
}
console.log(maria);
let array = ["alejandro", "anyi", "12", "true"];//aqui se pueden poner en difenentes variables
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//SI NOI ESPERAMOS A QUE LA PAGINA HAYA CARGADO ANTES DE ACEDER A SUS ELEMENTOS PUEDEN DAR ERROSES
window.addEventListener("DOMContentLoaded0", () => {
    let = allH1s = document.getElementsByClassName("h1")
    console.log(allH1s)
    allH1s.array.forEach(title => {

    });

}
)

function validate(event) {
    event.preventDefault();
    let inputEmail = document.getElementById("inputmail");//let es declarar una baariable
    let inputPass = document.getElementById("input-pass");
    validateEmail(inputEmail)
    validatePassword(inputPass)
}
function validateEmail(inputEmail) {
    let userString = inputEmail.value;//este no te lo puedes saltar
    let i = 0;//un string es un array
    while (i < userString.length) {
        if (userString[i] === "@") {
            inputEmail.classList.remove("error")
            inputEmail.classList.add("all-good")
            return;
        }
        i++;
    }
    //si salimos del bucle,signifca que no hemos encontrado un @,asi que daria error
    inputEmail.classList.add("error");
    inputPass.classList.remove("all-good");
}
function validatePassword(inputPass) {
    let userString = inputPass.value;
    let i = 6;

    if (userString.length >= i) {
        inputPass.classList.remove("error")
        inputPass.classList.add("all-good")
        return;
    }
    inputPass.classList.add("error");
    inputPass.classList.remove("all-good");
}
