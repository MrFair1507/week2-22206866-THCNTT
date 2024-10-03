import "./App.css";
import { useState } from "react";

function App() {

  const [ledStatus, setLedStatus] = useState(false);

  const handleLedChange = (status) => {
    setLedStatus(status);
  };

  return (

    <div className="App">
      <h1>ĐIỀU KHIỂN ĐÈN LED</h1>
      <p>Led is {ledStatus ? 'ON' : 'OFF'}</p>
      <button className="on-btn" onClick={()=>handleLedChange(true)}>turn on</button>
      <button className="off-btn" onClick={()=>handleLedChange(false)}>turn off</button>
    </div>
  );
}

export default App;
