import React from 'react';
import './App.css';
import Hello from './Hello';
import GViewer from './Viewer';
import { render } from '@testing-library/react';
// import RViewer from 'react-3d-model-viewer'
// import ModelViewer from 'react-3d-model-viewer/dist/js/ModelViewer';

export default function App() {
  const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';
  return (       
    <div  style={{overflow:"scroll"}}>
      {/* <Hello name="yunzi"/>   */}
      <GViewer />    
      {/* <VideoPlayer /> */}    
      {/* <ModelViewer type="gtlf" src={modelPath} /> */}
      {/* <ModelViewer type="gtlf" src={modelPath}/> */}
    </div>
  );
  


};

 
 
