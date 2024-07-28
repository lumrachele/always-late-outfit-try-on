import Webcam from "react-webcam";
import {useEffect, useState, useCallback} from 'react'

const CustomWebcam = ()=>{

const [deviceId, setDeviceId] = useState({});
const [devices, setDevices] = useState([]);

const handleDevices = useCallback(
  mediaDevices =>
    setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
  [setDevices]
);

useEffect(
  () => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  },
  [handleDevices]
);

return (<Webcam
audio={false}
// ref={this.setRef}
height={600}
width={800}
screenshotFormat="image/jpeg"
videoConstraints={{ deviceId: devices[0].deviceId }}
/>)
}

export default CustomWebcam