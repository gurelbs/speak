(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(n,e,t){"use strict";t.r(e);var o=t(4),c=t.n(o),s=t(40),i=t.n(s),r=(t(45),t.p,t(46),t(47),t(10)),p=t.n(r),u=t(1);var a=function(){var n=Object(r.useSpeechRecognition)(),e=n.transcript,t=n.finalTranscript,o=n.listening,s=n.resetTranscript,i=n.browserSupportsSpeechRecognition;c.a.useEffect((function(){if(t){var n=new SpeechSynthesisUtterance(t);speechSynthesis.speak(n),console.log(t)}}),[t]);var a=function(){s(),p.a.startListening({continuous:!0})};return i?(console.log("Browser support speech recognition."),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Microphone: ",o?"on":"off"]}),Object(u.jsx)("button",{onCopy:function(n){return n.preventDefault(),!1},onClick:a,onTouchStart:a,onMouseDown:a,onTouchEnd:p.a.stopListening,onMouseUp:p.a.stopListening,children:"Hold to talk"}),Object(u.jsx)("p",{children:e})]})):(console.log("Browser doesn't support speech recognition."),Object(u.jsx)("span",{children:"Browser doesn't support speech recognition."}))},h=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,114)).then((function(e){var t=e.getCLS,o=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;t(n),o(n),c(n),s(n),i(n)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(a,{})}),document.getElementById("root")),h()},45:function(n,e,t){},46:function(n,e,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.1657cee7.chunk.js.map