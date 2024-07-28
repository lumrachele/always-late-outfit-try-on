// import React, { Component } from 'react'

import CustomWebcam from './custom-webcam';
import WebcamCapture from './webcam-capture'

import hoodie from '../img/hoodie.png';


const CenterContentContainer = () => {

    return <div className="center-content-container"
    ><div className="video-background"> 
     {/* <CustomWebcam/> */}
    <WebcamCapture/>
    </div>

<img src={hoodie} className="current-clothing-top" alt="logo" /> 
    </div>
}

export default CenterContentContainer