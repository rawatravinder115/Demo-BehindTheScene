import React, { useState , useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/Demo/DemoList';
import './App.css';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  const[allowToggle,setAllowToggle] = useState(false);
  const [listTitle,setListTitle]= useState('My List');

  console.log("APP RUNNING ");

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);  
    }
  },[allowToggle]);

  const changeTitleHandler = useCallback(() =>{
    setListTitle('New Title');
  },[]);

  const allowToggleHandler = () =>{
      setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <DemoList title={listTitle} items={[5,3,1,10,9]}></DemoList>
      <Button onClick={changeTitleHandler}>change List Title</Button>
      <Button onClick={allowToggleHandler}>allow toggling ! </Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;

// Closure means that an inner function always has access to the vars 
// and parameters of its outer function, even after the outer function has returned.
// Inner function can access variables and parameters of an outer function (however, cannot access arguments object of outer function).


