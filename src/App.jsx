import { useState } from 'react';
import './App.css';
import phrases from "./db/phrases.json";
import { getRandomElement } from './utils/random.js';
import PhraseCard from './components/PhraseCard';
// import { backgrounds } from './constants/backgrounds';

function App() {
  const [phrase, setPhrase] = useState(getRandomElement(phrases));
  const handleChangePhrase = () => {
    setPhrase(getRandomElement(phrases));
  }
  return (
    <main className="min-h-screen bg-cover bg-center overflow-hidden text-center font-[Fredoka] items-center px-2" style={{backgroundImage: `url(/bg4.png)`}}>
      <PhraseCard prop={phrase} 
      handleChangePhrase={handleChangePhrase}/>
    </main>
  )
}

export default App;