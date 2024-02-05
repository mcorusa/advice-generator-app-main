const btnEl = document.getElementById("btn");
const adviceEl = document.getElementById("advice-content");
const apiURL = "https://api.adviceslip.com/advice";



async function getAdvice(){
   
    try{
        btnEl.disabled=true;
        adviceEl.innerHTML="loading.."
        const response = await fetch(apiURL);
        const data = await response.json();
        const randomAdvice = data.slip.advice;
        adviceEl.innerText='"'+randomAdvice + '"';
        btnEl.disabled=false;
    }   catch(error){
            adviceEl.innerText="An error occured. Try again later!";
            btnEl.disabled=false;
        }


};

btnEl.addEventListener("click", getAdvice);