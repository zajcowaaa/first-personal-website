
// Navigation handler
const burger = document.querySelector(".burger");
burger.addEventListener('click', () => navMobileHandler());

const closeMenuIcon = document.querySelector(".navFixed__close");
closeMenuIcon.addEventListener('click', ()=> navMobileHandler())

function navMobileHandler(){
   const navMobile = document.querySelector(".navFixed");
   navMobile.classList.toggle("navFixed--show");
}

// LifeStyle content


// const ecologyContent = [
//  "As an ecologically avare person I'm trying very hard to find an everday ways to make my life more sustainable and eco friendly. Not eating meat made me so creative in the kitchen as never before!",
//  "ANUSZKA"  
// ]

// const lfEcology = document.querySelector(".lifestyle___ecology");

// lfEcology.addEventListener("mouseover", (e)=> bgChangeOver(e));
// lfEcology.addEventListener("mouseleave", (e)=> bgChangeLeave(e));

// function bgChangeOver(e){
//    lfEcology.style.backgroundColor = "#000";
//    lfEcology.style.color = "#fff"
//    lfEcology.innerHTML = ecologyContent[1];
// }


// function bgChangeLeave(e){
//    lfEcology.style.backgroundColor = "#fff";
//    lfEcology.style.color = "#000"
//    lfEcology.innerHTML = ecologyContent[0];
// }

// Email handling 
const submitButton = document.querySelector(".contact__btn");
submitButton.addEventListener('click', (e)=> submitButtonHandler(e));

function submitButtonHandler(e){
e.preventDefault();

//Pobrane inputy
const inputName = document.querySelector(".contact__name");
const inputMail = document.querySelector(".contact__mail");
const inputTextArea = document.querySelector(".contact__textArea");


//Value z pobranych inputow
const inputNameValue = inputName.value;
const inputMailValue = inputMail.value;
const inputTextAreaValue = inputTextArea.value;
const formResult = {user_name: inputNameValue, user_email:inputMailValue, message: inputTextAreaValue, reply_to: inputMailValue};

//Walidacje poprzez regExp
const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Dane z emailJS
const templateId = "ANZ";
const serviceId = "anna.izabela.nowakowska";

// Walidacja i funkcja wysyłajca poprzez emailJS

if(inputNameValue === "" || inputMailValue === "" || inputTextAreaValue === ""){
   return
}else if(!patternEmail.test(inputMailValue)){
   inputMail.value = "Nie poprawny mail!";
   inputMail.style.border = "1px solid #f00";
   return; 
}
else{
   emailjs.send(serviceId, templateId, formResult)
   .then(function(response) {
     console.log(response.status, response.text);
   }, function(error) {
      console.log(error);
   });
}
}


