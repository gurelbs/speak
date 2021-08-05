import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    if (answer){
    const speak = new (window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance)(answer);
      speechSynthesis.speak(speak)
    }
  },[answer])

  function handleReco(){
    const recognition = new (window.speechRecognition || window.webkitSpeechRecognition)();
    recognition.start()
    recognition.onresult = (e) => {
      const current = e.resultIndex;
      let transcript = e.results[current][0].transcript;
      setAnswer(transcript)
      let mobileRepeatBug = (current === 1 && transcript === e.results[0][0].transcript);
      if(mobileRepeatBug) {
        console.log(mobileRepeatBug);
      }
      recognition.onend = () => {
        console.log('Speech recognition service disconnected');
      }
    }
  }
  return (
    <div className="App-header">
      <button onClick={handleReco}>התחלת זיהוי קולי</button>
      {answer}
    </div>
  );
}
