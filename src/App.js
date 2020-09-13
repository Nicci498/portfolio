import React, {useState} from 'react';

import './App.css';
import Title from './components/Title.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';

function App() {
  const [ showTitle, setShowTitle] = useState(true) 
  function showTitleabs() {
  let a =  document.querySelector('.test')
  setTimeout(() => {
    a.style.display = 'none'
  }, 1000);
  console.log("Testing this out")
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="test" style={{position:'absolute', top:"50px"}}>
        <Title />
        </div>
        <br/>
        <About />
        <button onClick={() => showTitleabs()}> Hello there </button>
        <Contact />
        <Projects />
      </header>
      
    </div>
  );
}

export default App;
