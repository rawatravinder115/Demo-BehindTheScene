import React, { useState } from 'react';

import './App.css';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING ");

  const toggleHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p> this is new !</p>}
      <Button onCLick={toogleHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
