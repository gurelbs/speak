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
      const speak = new SpeechSynthesisUtterance(transcript)
      speechSynthesis.speak(speak)
    }
  },[finalTranscript])
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button
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
