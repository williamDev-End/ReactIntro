import React, {useEffect ,useState} from 'react';
import './App.scss';
import Header from '../header/header';
import Main from '../main/main';
function App() {
  const [toggleButton, setToggleButton] = useState(false);

  function toggletest() {
    setToggleButton(!toggleButton);
  };

  return (
    <div className="App">
      <button onClick={toggletest}>test</button>
      <Header handleToggle = { toggleButton }/>
      <Main handleToggle = { toggleButton }/>
      <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
