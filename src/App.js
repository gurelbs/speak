import React, { useState } from 'react';
import './App.css';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

function App() {
  const {
    transcript,
    finalTranscript,
    listening,  
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [havePermissions, setHavePermissions] = useState(false)
  React.useEffect(() => {
    if (finalTranscript){
      const speak = new SpeechSynthesisUtterance(finalTranscript)
      speechSynthesis.speak(speak)
      console.log(finalTranscript);
    }
  },[finalTranscript])

  const startListening = () => {
    resetTranscript()
    SpeechRecognition.startListening({ continuous: true });
  }

  if (!browserSupportsSpeechRecognition) {
    console.log(`Browser doesn't support speech recognition.`);
    return <span>Browser doesn't support speech recognition.</span>;
  }
  function Mobile(){
    
    function checkPermissions() {
      const permissions = navigator.mediaDevices.getUserMedia({audio: true, video: false})
      permissions.then((stream) => {
        alert('accepted the permissions');
        setHavePermissions( x => !x)
      })
      .catch((err) => {
        setHavePermissions(false)
        console.log(`${err.name} : ${err.message}`)
      });
    }
    
    function handleReco(){
      checkPermissions()
      const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
      let recognition = new SpeechRecognition()
      recognition.start();
      recognition.onresult = (e) => {
        const current = e.resultIndex;
        let transcript = e.results[current][0].transcript;
        let mobileRepeatBug = (current == 1 && transcript == e.results[0][0].transcript);

        if(!mobileRepeatBug) {
            if(transcript === 'בדיקה' || transcript === ' בדיקה') {
                console.log(transcript);
            }
        }
    }
    }
    return <button onClick={handleReco}>
      זיהוי קולי בטלפון
    </button>
  }
  return (
    <div>
      <p>מיקרופון: {
      listening 
      ? 'פעיל' 
      : 'כבוי'
      }</p>
      <button
        onCopy={(e)=>{
          e.preventDefault()
          return false;
        }}
        onClick={
          () => listening 
          ? SpeechRecognition.stopListening() 
          : startListening()
        }
      >לחיצה ל{
      listening 
      ? 'דיבור' 
      :'כיבוי'
      }</button>
      <p>{transcript}</p>
      <Mobile/>
    </div>
  );
}

export default App;
