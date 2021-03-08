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
    //최대확대값
    model.current.maxFieldOfView="180deg";
    //최대축소값
    model.current.minFieldOfView="0deg";

    (() => {      
      const tapDistance = 2;
      let panning = false;
      let panX, panY;
      let startX, startY;
      let lastX, lastY;
      let metersPerPixel;
    
      const startPan = () => {
        const orbit = model.current.getCameraOrbit();
        const {theta, phi, radius} = orbit;
        const psi = theta - model.current.turntableRotation;
        metersPerPixel = 0.75 * radius / model.current.getBoundingClientRect().height;
        panX = [-Math.cos(psi), 0, Math.sin(psi)];
        panY = [
          -Math.cos(phi) * Math.sin(psi),
          Math.sin(phi),
          -Math.cos(phi) * Math.cos(psi)
        ];
        model.current.interactionPrompt = 'none';
      };
    
      const movePan = (thisX, thisY) => {
        const dx = (thisX - lastX) * metersPerPixel;
        const dy = (thisY - lastY) * metersPerPixel;
        lastX = thisX;
        lastY = thisY;
    
        const target = model.current.getCameraTarget();
        target.x += dx * panX[0] + dy * panY[0];
        target.y += dx * panX[1] + dy * panY[1];
        target.z += dx * panX[2] + dy * panY[2];
        model.current.cameraTarget = `${target.x}m ${target.y}m ${target.z}m`;
    
        // This pauses turntable rotation
        model.current.dispatchEvent(new CustomEvent(
              'camera-change', {detail: {source: 'user-interaction'}}));
      };
    
      const recenter = (pointer) => {
        panning = false;
        if (Math.abs(pointer.clientX - startX) > tapDistance ||
            Math.abs(pointer.clientY - startY) > tapDistance)
          return;
        const rect = model.current.getBoundingClientRect();
        const x =  window.event.clientX - rect.left;
        const y =  window.event.clientY - rect.top;
        const hit = model.current.positionAndNormalFromPoint(x, y);
        model.current.cameraTarget =
            hit == null ? 'auto auto auto' : hit.position.toString();
      };
    
      const onPointerUp = (event) => {
        const pointer = event.clientX ? event : event.changedTouches[0];
        if (Math.abs(pointer.clientX - startX) < tapDistance &&
            Math.abs(pointer.clientY - startY) < tapDistance) {
          recenter(pointer);
        }
        panning = false;
      };
    
      model.current.addEventListener('mousedown', (event) => {
        startX = event.clientX;
        startY = event.clientY;
        panning = event.button === 2 || event.ctrlKey || event.metaKey ||
            event.shiftKey;
        if (!panning)
          return;
    
        lastX = startX;
        lastY = startY;
        startPan();
        event.stopPropagation();
      }, true);
    
      model.current.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        panning = event.touches.length === 2;
        if (!panning)
          return;
    
        const {touches} = event;
        lastX = 0.5 * (touches[0].clientX + touches[1].clientX);
        lastY = 0.5 * (touches[0].clientY + touches[1].clientY);
        startPan();
      }, true);
    
      model.current.addEventListener('mousemove', (event) => {
        if (!panning)
          return;
    
        movePan(event.clientX, event.clientY);
        event.stopPropagation();
      }, true);
    
      model.current.addEventListener('touchmove', (event) => {
        if (!panning || event.touches.length !== 2)
          return;
    
        const {touches} = event;
        const thisX = 0.5 * (touches[0].clientX + touches[1].clientX);
        const thisY = 0.5 * (touches[0].clientY + touches[1].clientY);
        movePan(thisX, thisY);
      }, true);
    
      window.self.addEventListener('mouseup', (event) => {
        recenter(event);
      }, true);
      
      window.self.addEventListener('touchend', (event) => {
        if (event.touches.length === 0) {
          recenter(event.changedTouches[0]);
        }
      }, true);
    })();
    
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