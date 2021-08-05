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
  const [answer, setAnswer] = useState('')

  React.useEffect(() => {
    if (answer){
      const speak = new SpeechSynthesisUtterance(answer)
      speechSynthesis.speak(speak)
      console.log(answer);
    }
  },[answer])

  const startListening = () => {
    resetTranscript()
    SpeechRecognition.startListening({ continuous: true });
  }

  if (!browserSupportsSpeechRecognition) {
    console.log(`Browser doesn't support speech recognition.`);
    return <span>Browser doesn't support speech recognition.</span>;
  }
  function Mobile(){
    
    function handleReco(){
      const recognition = new (window.speechRecognition || window.webkitSpeechRecognition)();
      recognition.start()
      recognition.onresult = (e) => {
        const current = e.resultIndex;
        let transcript = e.results[current][0].transcript;
        setAnswer(transcript)
        let mobileRepeatBug = (current == 1 && transcript == e.results[0][0].transcript);
        if(!mobileRepeatBug) {
            if(transcript === 'בדיקה' || transcript === ' בדיקה') {
                console.log(transcript);
            }
        } else {
          setAnswer(mobileRepeatBug)
        }
        recognition.onend = () => {
          console.log('Speech recognition service disconnected');
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
      {answer}
    </div>
  );
}

export default App;
