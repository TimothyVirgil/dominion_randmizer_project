import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from "react";

export function Generate_set_1() {
  // const [domset, setDomset] = useState()
  // const fetchSet = async () => {
  //     const response = await fetch("http://127.0.0.1:8000/pickset1")
  //     const myset = await response.text()
  //     return myset
  // }
}

function App() {
  const [mySet, setMySet] = useState('');
  const fetchSet = async () => {
    const response = await fetch("http://127.0.0.1:8000/pickset1")
    const myset = await response.text()
    setMySet(myset)
}
  return (
    <div className="PageContents">
    <h1>Dominion Randomizer!</h1>
    <button type="button" onClick={fetchSet}>Pick First Set</button>
    <p>
      {mySet}
    </p>
  </div>
  );
}

export default App;
