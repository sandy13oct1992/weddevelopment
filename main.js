
//const elements = document.getElementsByClassName("item");
//elements[0].style.backgroundColor='green';
//elements[1].style.backgroundColor='yellow';

//const elements = document.getElementsById("item"

const name = document.getElementById("name");
const email = document.getElementById("E-mail");
const button = document.getElementById("Submit");

const submitFunction = (event) =>{
    event.preventDefault();
    console.log(name.value)
    console.log(email.value)
    }
button.addEventListener("click",submitFunction);
