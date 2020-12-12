import React, { useState, useEffect } from 'react';
import Results from './Results';
import './App.css';



export interface IChose {
  name: string,
  emoji: string,
  wins: string
}

const computerRandomChose = (gameEmojis: IChose[], setComputerChose: React.Dispatch<React.SetStateAction<IChose | null>>): void => {
  const random = Math.floor(Math.random() * gameEmojis.length);
  setComputerChose(gameEmojis[random]);
}


function App() {
  const [gameEmojis] = useState([{ name: 'rock', emoji: '✊', wins: 'siscors' }, { name: 'paper', emoji: '✋', wins: 'rock' }, { name: 'siscors', emoji: '✌', wins: 'paper' }]);

  const [userChose, setUserChose] = useState<IChose | null>(null);
  const [computerChose, setComputerChose] = useState<IChose | null>(null);

  const [computerChosesHistory, setComputerChosesHistory] = useState<IChose[]>([]);
  const [userChosesHistory, setUserChosesHistory] = useState<IChose[]>([]);

  const [computerScore, setComputerScore] = useState<number>(0);
  const [userScore, setUserScore] = useState<number>(0);



  const onHandleClick = (emoji: IChose) => {
    setUserChose(emoji);
    computerRandomChose(gameEmojis, setComputerChose);
  };

  const onClearHistory = () => {
    setComputerChosesHistory([]);
    setUserChosesHistory([]);
    setUserScore(0);
    setComputerScore(0);
  }

  useEffect(() => {
    if (userChose && computerChose) {
      userChose.wins === computerChose.name && setUserScore(prev => prev + 1);
      computerChose.wins === userChose.name && setComputerScore(prev => prev + 1);
      setComputerChosesHistory([...computerChosesHistory, computerChose]);
      setUserChosesHistory([...userChosesHistory, userChose]);
    }
  }, [computerChose, userChose]);




  return (
    <div className="App">
      <h1>ROCK PAPER SCISSORS</h1>
      <div className='emoji-group'>
        {
          gameEmojis.map((emoji, i) => <button key={i} onClick={() => onHandleClick(emoji)} className='emoji'>{emoji.emoji}</button>)
        }
      </div>
      <Results onClearHistory={onClearHistory} computerScore={computerScore} userScore={userScore} computerChosesHistory={computerChosesHistory} userChosesHistory={userChosesHistory} />
    </div>

  );
}

export default App;
