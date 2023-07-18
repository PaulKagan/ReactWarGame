import './App.css';
import { useState } from 'react';
import Game from './components/Game';
import Menu from './components/Menu';


function App() {

 const [score, setScore] = useState({user: 0, computer: 0, gamesPlayed: 0});
 const [userName,setUserName] = useState("");
 const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="App">
      {signedIn ? <Game score={score} setScore={setScore} userName={userName}/> : <Menu signedIn={signedIn} setSignedIn={setSignedIn} setUserName={setUserName}/>}
    </div>
  );
}

export default App;
