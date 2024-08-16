import React, { useEffect, useCallback } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);
  const webcamRef = React.useRef(null);
  const [url, setUrl] = React.useState(null);

  // keeping this so that we can detect another webcam when provided
  const handleDevices = React.useCallback(
    (mediaDevices) => {
      console.log("rach mediaDevices", mediaDevices);
      return setDevices(
        mediaDevices.filter(({ kind }) => kind === "videoinput")
      );
    },
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  // oops this is just the photo for the webcam, not the whole screen
  // need to use html canvas for this https://medium.com/@pro.grb.studio/how-to-screencapture-in-reactjs-step-by-step-guide-b435e8b53e11#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyNmQ5MTdiMWZlOGRlMTMzODJhYTdjYzlhMWQ2ZTkzMjYyZjMzZTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDY1Mzk5MzQxMjYwNzM0Njg0MTAiLCJlbWFpbCI6InJsdW04OTRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTcyMjE5NTIxNywibmFtZSI6IlJhY2hlbCBMdW0iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0tLcVR0RzZxMDl6LXBSdmhTZHMxUWJmWDBUYjM5TVFMY3ZxN1l0M01aN2UycG9PRUI9czk2LWMiLCJnaXZlbl9uYW1lIjoiUmFjaGVsIiwiZmFtaWx5X25hbWUiOiJMdW0iLCJpYXQiOjE3MjIxOTU1MTcsImV4cCI6MTcyMjE5OTExNywianRpIjoiM2M3YmUwNzlkNzRiMDA2NWYxMjk2MzNjNTA4NDM0MmY3ZDMwOTUyMSJ9.IXFi_BdiMn4thrtEC6bTX_C6gKaL0x_wZMFsncDTDfRF3rwKcSfungRamWAccbGrD6hJ2EOIVoNJJhTMNUxHNrA9_mnFexxsPNaxX7FjYTtFX2Qeg70DfeAyrudaLBwNnzVMGqMGPYLAfvfE9vgcKYQrseeqzVTpQmV5xx9Ahl1JUbfLoNY9KURixLLrcQJO8iRWlSkPTi2jHe4o9Fd0yxmsliD_dChXwmcE_zTfMzhpTdHbOk_UZTwa23I2iOHcN2Z_8Ci0xP5JUegkW2KYi_O_ro-71e5k1dG2iZwnb1WlPosLL_lcAWzndTl-umnycMW4Nz7_PMf92xfnDktiEA
  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  const handleDownload = () => {
    window.open(this.state.url);
  };

  const renderExternalWebcam = useCallback(() => {
    const externalWebcam = devices?.find((device) => {
      return device?.label.includes("icspring camera");
    });

    return (
      <Webcam
        audio={false}
        ref={webcamRef}
        videoConstraints={{ deviceId: externalWebcam?.deviceId, width: 800 }}
        onUserMedia={onUserMedia}
        d
        screenshotFormat="image/jpeg"
      />
    );
  }, [devices]);

  const renderAllWebcams = useCallback(() => {
    return devices?.map((device, key) => (
      <Webcam
        audio={false}
        ref={webcamRef}
        videoConstraints={{ deviceId: device.deviceId, width: 800 }}
        onUserMedia={onUserMedia}
        d
        key={key}
        screenshotFormat="image/jpeg"
      />
    ));
  }, [devices]);

  const renderCaptureAndScreenshot = useCallback(() => {
    // captures only the camera and not the full screen
    return (
      <>
        <button onClick={capturePhoto}>Capture</button>
        <button onClick={() => setUrl(null)}>Refresh</button>
        {url && (
          <div>
            <img src={url} alt="Screenshot" />
            <a download target="_blank" href={url}>
              download
            </a>
          </div>
        )}
      </>
    );
  }, []);

  return (
    <>
      <div className="webcam-capture-with-screenshot">
        {renderExternalWebcam()}
      </div>
    </>
  );
};

export default WebcamCapture;
