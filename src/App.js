import React from 'react';
import './App.css';
import Hello from './Hello';
import GViewer from './Viewer';
import useFullscreen from "./useFullscreen";

export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (       
    <div  >
      <div ref={element}>
        <GViewer />     
      </div>
      <br />
       <button onClick={triggerFull}>Make fullscreen</button>    
       
      {/* <Hello name="yunzi"/>   */}
      {/* <VideoPlayer /> */}    
      {/* <ModelViewer type="gtlf" src={modelPath} /> */}
      {/* <ModelViewer type="gtlf" src={modelPath}/> */}
    </div>
  );
  


};

 
 
