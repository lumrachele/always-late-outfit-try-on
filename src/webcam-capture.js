import React from 'react';
import Webcam from "react-webcam";

const WebcamCapture = () => {
    const [deviceId, setDeviceId] = React.useState({});
    const [devices, setDevices] = React.useState([]);
  
    const handleDevices = React.useCallback(
      mediaDevices =>
        setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
      [setDevices]
    );
  
    React.useEffect(
      () => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
      },
      [handleDevices]
    );

    console.log('rachel devices', devices)
  
    return (
      <>
        {devices.map((device, key) => (
            <div  key={key} >
              <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId, width: 600 }} />
              {/* {device.label || `Device ${key + 1}`} */}
            </div>
  
          ))}
      </>
    );
  };

  export default WebcamCapture