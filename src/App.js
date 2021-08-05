import React from 'react';
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
    
    
    function handleReco(){
      const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
      let reco = new SpeechRecognition()
      console.log(reco);
      reco.start()
      reco.onresult = e => console.log(e.results[0][0].transcript);
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
