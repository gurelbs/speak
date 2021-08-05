import logo from './logo.svg';
import './App.css';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import React from 'react'
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
  console.log(`Browser support speech recognition.`);


  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button
        onCopy={(e)=>{
          e.preventDefault()
          return false;
        }}
        onClick={startListening}
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
      >Hold to talk</button>
      <p>{transcript}</p>
    </div>
  );
}

export default App;
