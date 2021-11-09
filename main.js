var SpeechRecognition=window.webkitSpeechRecognition;
var RecognitionAI = new SpeechRecognition();

function start(){

    document.getElementById("textarea1").innerHTML="";
    RecognitionAI.start();

}

RecognitionAI.onresult()=function(event){

    console.log(event);
    var transcriptValue= event.results[0][0].transcript;
    document.getElementById("textarea1").innerHTML=transcriptValue;
    console.log(transcriptValue);

    speak();
}

function speak(){

    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textarea1").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera);

}

camera = document.getElementById("webcam")
Webcam.set({

    height:250,
    width:320,
    image_format:'jpeg',
    jpeg_quality:90

});