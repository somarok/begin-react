import React,{useEffect, useRef, useState} from 'react';
// import '@google/model-viewer';
// import MViewer from 'react-model-viewer';
import {GLTFModel,DirectionLight } from 'react-3d-viewer';

function Viewer() {
// const [result, setResult] = useState('hello');
useEffect(()=>{
    // const script = document.createElement('script');    
    // script.src = './lib/web-model-viewer.min.js';
    // // script.async=true;    
    // document.body.appendChild(script);
    // model.current.focus();    
    // OnReset();
      InitArtyViewer();
  //   return () => {
  //     document.body.removeChild(script);
  //     model.current.focus();    
  //     OnReset();
  //   }    
  // }, ['./web-model-viewer.min.js']
  
});


// const model=useRef();
const modelPath = '/wp-content/uploads/test/03_2_70.gltf';
const modelPath1 = '/wp-content/uploads/test/03_2_150.gltf';
const modelPath2= '/wp-content/uploads/test/03_2_300.gltf';
const modelPath3 = '/wp-content/uploads/test/BROARD_LEAF_SUCCULENT_5K.gltf';
// const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';

function InitArtyViewer() {
  
  let configObject = {
    containerId: 'modelViewerContainer', 
    dracoDecoderPath: null,
    defaultMaterialColor: '#0055ff',
    screenShotButton: true,
    fullscreenButton: true,
    animationControlsButton: true,
    backgroundColor: '#ffffff',
    zoomEnabled: true,
    zoomInLimit: 1,
    zoomOutLimit: 10,
    showDefaultLoadingScreen: true,
    loadingScreenMessage: "Model is loading...",
    loadingAnimationColor: "#FF7F50",
    autoRotate: false,
    panControls:true,
    autoRotateSpeed: 5,
    rotationPolarTopLimit: 100,
    rotationPolarBottomLimit: 100,
    castShadows: true,
    shadowBlur: 10
  }
  
  configObject.containerId = "modelViewerContainer"; 
  let modelViewer = new ModelViewer(configObject); 
  modelViewer.initialize('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf');
  console.log("Model loaded");  
};

// function OnReset(){
//     // console.log(model);
//     setInterval(() => {
//         const orbitCycle = ['45deg 55deg 4m', '-60deg 110deg 2m', '0deg 75deg 105%'];
//         const currentOrbitIndex = orbitCycle.indexOf(model.current.cameraOrbit);
//         model.current.cameraOrbit = orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
//     }, 5000);
//   };


return(
    <div width="500px" height="500px">
    {/* <GLTFModel src={modelPath} width="300" height="300" position={{x:0,y:0,z:0}} anitialias={true}>
    <DirectionLight color={0xffff00}/>
    </GLTFModel> */}
    <section className="main"  id="modelViewerContainer"></section>
    {/* <model-viewer style={{width:"500px", height:"500px"}} ref={model} src={modelPath} alt="A 3D model of an astronaut" camera-controls></model-viewer> */}
    {/* <model-viewer style={{width:"500px", height:"500px"}} ref={model} src={modelPath1} alt="A 3D model of an astronaut" camera-controls></model-viewer> */}
    {/* <model-viewer style={{width:"500px", height:"500px"}} ref={model} src={modelPath2} alt="A 3D model of an astronaut" camera-controls></model-viewer> */}  
    {/* <img src={ modelPath2} width='350' height='350' /> */}
    </div>
  )

}


export default Viewer;