import React,{useEffect, useRef, useState, Component} from 'react';
import '@google/model-viewer';

function Viewer() {
// const [result, setResult] = useState('hello');
useEffect(()=>{
    // const script = document.createElement('script');    
    // script.src = './lib/web-model-viewer.min.js';
    // script.async=true;    
    // document.body.appendChild(script);
    // script.onload = () =>{
    //   InitArtyViewer();
    // }
    model.current.focus();    
    OnReset(); 
  
});


const model=useRef();
const modelPath = '/wp-content/uploads/test/03_2_70.gltf';
const modelPath1 = '/wp-content/uploads/test/03_2_150.gltf';
const modelPath2= '/wp-content/uploads/test/03_2_300.gltf';
const modelPath3 = '/wp-content/uploads/test/BROARD_LEAF_SUCCULENT_5K.gltf';
const modelPath4 = '/wp-content/uploads/test/BLA12_3_100k.gltf';
// const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';

//for arty. 뷰어 셋팅용 객체
// let configObject = {
//   containerId: 'modelViewerContainer', 
//   dracoDecoderPath: null,
//   defaultMaterialColor: '#0055ff',
//   screenShotButton: false,
//   fullscreenButton: false,
//   animationControlsButton: true,
//   backgroundColor: '#ffffff',
//   zoomEnabled: true,
//   zoomInLimit: 1,
//   zoomOutLimit: 10,
//   showDefaultLoadingScreen: true,
//   loadingScreenMessage: "Model is loading...",
//   loadingAnimationColor: "#FF7F50",
//   autoRotate: false,
//   panControls:true,
//   autoRotateSpeed: 5,
//   rotationPolarTopLimit: 100,
//   rotationPolarBottomLimit: 100,
//   castShadows: false,
//   shadowBlur: 0
// }
// let configObject2 = {
//   containerId: 'modelViewerContainer2', 
//   dracoDecoderPath: null,
//   defaultMaterialColor: '#0055ff',
//   screenShotButton: false,
//   fullscreenButton: false,
//   animationControlsButton: true,
//   backgroundColor: '#ffffff',
//   zoomEnabled: true,
//   zoomInLimit: 1,
//   zoomOutLimit: 10,
//   showDefaultLoadingScreen: true,
//   loadingScreenMessage: "Model is loading...",
//   loadingAnimationColor: "#FF7F50",
//   autoRotate: false,
//   panControls:true,
//   autoRotateSpeed: 5,
//   rotationPolarTopLimit: 100,
//   rotationPolarBottomLimit: 100,
//   castShadows: false,
//   shadowBlur: 0
// }
// let configObject3 = {
//   containerId: 'modelViewerContainer3', 
//   dracoDecoderPath: null,
//   defaultMaterialColor: '#0055ff',
//   screenShotButton: false,
//   fullscreenButton: false,
//   animationControlsButton: true,
//   backgroundColor: '#ffffff',
//   zoomEnabled: true,
//   zoomInLimit: 1,
//   zoomOutLimit: 10,
//   showDefaultLoadingScreen: true,
//   loadingScreenMessage: "Model is loading...",
//   loadingAnimationColor: "#FF7F50",
//   autoRotate: false,
//   panControls:true,
//   autoRotateSpeed: 5,
//   rotationPolarTopLimit: 100,
//   rotationPolarBottomLimit: 100,
//   castShadows: false,
//   shadowBlur: 0
// }

// function InitArtyViewer() {  
//   //arty 객체 생성
//   const modelViewer = new window.ModelViewer(configObject); 
//   modelViewer.initialize(modelPath);
//   const modelViewer2 = new window.ModelViewer(configObject2); 
//   modelViewer2.initialize(modelPath1);
//   const modelViewer3 = new window.ModelViewer(configObject3); 
//   modelViewer3.initialize(modelPath2);
// };

function OnReset(){
    model.current.environmentImage ='neutral';
    // model.current.maxFieldOfView="180";
    
    //5초마다 배열에 넣은 각도값으로 모델 시점이 변경됨.
    // setInterval(() => {
    //     const orbitCycle = ['45deg 55deg 4m', '-60deg 110deg 2m', '0deg 75deg 105%'];
    //     const currentOrbitIndex = orbitCycle.indexOf(model.current.cameraOrbit);
    //     model.current.cameraOrbit = orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    // }, 5000);
  };


return(
    <div style={{margin:"0px"}}>
    {/* <div style={{fontSize:"45px", color:"black"}}>arty</div>
    <div style={{display:"flex"}}>
        <section style={{width:"500px", height:"500px"}} className="main"  id="modelViewerContainer"></section>
        <section style={{width:"500px", height:"500px"}} className="main"  id="modelViewerContainer2"></section>
        <section style={{width:"500px", height:"500px"}} className="main"  id="modelViewerContainer3"></section>
    </div> */}
    <div style={{display:"flex" }}>
        <model-viewer style={{width:"100vw",height:"100vh"}} ref={model} src={modelPath4} alt="A 3D model of an astronaut" camera-controls></model-viewer>
        {/* <model-viewer style={{width:"500px", height:"500px"}} ref={model} src={modelPath1} alt="A 3D model of an astronaut" camera-controls></model-viewer>
        <model-viewer style={{width:"500px", height:"500px"}} ref={model} src={modelPath2} alt="A 3D model of an astronaut" camera-controls></model-viewer>   */}
    </div>
    </div>
  )

}

export default Viewer;