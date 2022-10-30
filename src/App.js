import React, { useState } from "react";
import "./App.css";

function App() {
  const [isEnteringCode, setEnteginCode] = useState(false);

  return (
    <div className="wrapper">
      <h1 className="title">Служба такси</h1>

      {isEnteringCode && (
        <div className="input">
          <input />
          <button onClick={() => setEnteginCode(false)}>x</button>
        </div>
      )}
      {!isEnteringCode && (
        <button onClick={() => setEnteginCode(true)}>Ввести код приглашения</button>
      )}
    </div>
  );
}

export default App;
