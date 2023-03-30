//=========================== TASK 1
let form = document.querySelector("#form");
form.addEventListener('submit', ()=>{
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname_i").value;
    let email = document.querySelector("#email_i").value;
    alert(`Ім'я та прізвище ${name} ${surname} \n Адреса пошти ${email}`)
})
//=========================== TASK 2

function generateNum (a, b){
    let num = Math.floor(Math.random()*b+a);
    return num;
}
const generateNumConst = function (a, b){
    let num = Math.floor(Math.random()*b+a);
    return num;
}

const generateNumLine = (a,b) => {Math.floor(Math.random()*b+a)};

//================================ TASK 3

let word_arr = ["Саша", "Юра", "Аня", "Машина", "Літак", "Будівля"];
let trimmed_word_arr = [];
alert(`Ось наш масив слів : \n${word_arr}`);
let word_count = Number(prompt("Введіть число букв"));

for(let i = 0; i < word_arr.length;i++){
    if(word_arr[i].length < word_count){
        trimmed_word_arr.push(word_arr[i]);
    }
}
alert(`Ось "обрізаний" масив з словами : \n ${trimmed_word_arr}`)
