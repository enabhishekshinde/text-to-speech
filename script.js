let speach = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click" , ()=>{


    speach.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speach);
})