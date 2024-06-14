const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Master...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing Cipher...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening to you...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hi') || message.includes('hello cypher')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("cypher")) {
        // window.open("https://google.com", "_blank");
        speak("Yes Master");
    } else if (message.includes("who made you")) {
        // window.open("https://google.com", "_blank");
        speak("Lakshay Dhoundiyal");
    } else if (message.includes("lakshya portfolio")) {
        window.open("https://lakshaydhoundiyalportfolio.netlify.app", "_blank");
        speak("This is Lakshay's Portfolio");
    } else if (message.includes("lakshya linktree")) {
        window.open("https://linktr.ee/lakshaydhoundiyal", "_blank");
        speak("This is Lakshay's Linktree");
    } else if (message.includes("lakshya linkedin")) {
        window.open("https://in.linkedin.com/in/lakshay-dhoundiyal-531b25259", "_blank");
        speak("Here it is");
    } else if (message.includes("lakshya blogs")) {
        window.open("https://hackersinsight.blogspot.com/", "_blank");
        speak("Here it is");
    } else if (message.includes("lakshya github")) {
        window.open("https://github.com/LakshayD02", "_blank");
        speak("Lakshay's Github");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram");
    } else if (message.includes("lakshya IBR")) {
        window.open("https://indiabookofrecords.in/maximum-virtual-and-remote-internships-completed-by-an-individual-in-different-domains/", "_blank");
        speak("Lakshay Dhoundiyal is a IBR Holder");
    } else if (message.includes("lakshya instagram")) {
        window.open("https://instagram.com/_laddu.02_", "_blank");
        speak("Lakshay Dhoundiyal Instagram");
    } else if (message.includes("who is your owner")) {
        // window.open("https://google.com", "_blank");
        speak("Lakshay Dhoundiyal");
    } else if (message.includes("you are made using?")) {
        // window.open("https://google.com", "_blank");
        speak("HTML, CSS and JavaScript");
    } else if (message.includes("who are you")) {
        speak("I am Cypher! A Virtual Assistant");
    } else if (message.includes("hu r u")) {
        speak("I am Cypher! A Virtual Assistant");
    } else if (message.includes("tell me about yourself")) {
        // window.open("", "_blank");
        speak("I am Cypher! A Virtual Assistant");
    } else if (message.includes("who is Lakshay Dhoundiyal?")) {
        window.open("https://www.google.com/search?q=lakshay+dhoundiyal", "_blank");
        speak("Lakshay Dhoundiyal is a India Book of Records Holder");
    } else if (message.includes("who is Lakshay")) {
        window.open("https://www.google.com/search?q=lakshay+dhoundiyal", "_blank");
        speak("Lakshay Dhoundiyal is a India Book of Records Holder");
    } else if (message.includes("Who is lakshya")) {
        window.open("https://www.google.com/search?q=lakshay+dhoundiyal", "_blank");
        speak("Lakshay Dhoundiyal is a India Book of Records Holder");
    } else if (message.includes("lakshya")) {
        window.open("https://www.google.com/search?q=lakshay+dhoundiyal", "_blank");
        speak("Lakshay Dhoundiyal is a India Book of Records Holder");
    } else if (message.includes("lakshay dhoundiyal")) {
        window.open("https://lakshaydhoundiyalportfolio.netlify.app", "_blank");
        speak("This is Lakshay Dhoundiyal's Portfolio");
    } else if (message.includes("lakshya portfolio")) {
        window.open("https://lakshaydhoundiyalportfolio.netlify.app", "_blank");
        speak("This is Lakshay Dhoundiyal's Portfolio");
    } else if (message.includes("Lakshay Dhoundiyal Linktree")) {
        window.open("https://linktr.ee/lakshaydhoundiyal", "_blank");
        speak("This is Lakshay Dhoundiyal's Linktree");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}