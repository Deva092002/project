const btn = document.querySelector('#btn');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    console.log(transcript)

    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;   
    
     var res1 = /hi/;
     var res2 = /hello/;
     var res3 = /Google/;
     var res4 = /YouTube/;
     var res5 = /date/;
     var res6 = /day/;

    // greeting alex
    if(res1.test(transcript) || res2.test(transcript))  {
        speech.text = "hello , how can i help you";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(transcript === "how are you") {
        speech.text = "I am good , and what about you ?";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    // || transcript ==="mai bhi theek hu"
    else if(transcript === "Even i am good")  {
        speech.text = "that's great , how can i help you?";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }

    //opening applications
    else if(res3.test(transcript)) {
        speech.text = "okay , opening Google";
        window.open("https://www.google.com" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    
    }

    else if(res4.test(transcript)) {
        speech.text = "okay , opening YouTube";
        window.open("https://www.youtube.com" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    // else if(res5.test(transcript)) {
    //     speech.text = "okay , opening Facebook";
    //     window.open("https://www.facebook.com" , "_blank");
    //     console.log(speech.text)
    //     window.speechSynthesis.speak(speech);
    // }

    //knowing date

    else if (res5.test(transcript)) {
        const d = new Date();
        const months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
        const month = months[d.getMonth()];

        

        speech.text = `today's date is ${d.getDate()} ${month} ${d.getFullYear()}`;

        window.speechSynthesis.speak(speech);
    }

    else if(res6.test(transcript)) {
        const d = new Date();
        const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
        const day = days[d.getDay()];
        speech.text = `Today is ${day}`
        window.speechSynthesis.speak(speech);
    }

    else {
        speech.text = "sorry i don't have any information regarding this";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }


    
};
              
// start recognition
btn.addEventListener('click' , ()=> {
    recognition.start();
})