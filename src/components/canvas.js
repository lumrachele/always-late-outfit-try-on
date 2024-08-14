import React, { useCallback } from "react";
import player from "../img/player.png";

const Canvas = ({ draw }) => {
  const canvasRef = React.useRef();
  //   const contextRef = React.useRef();

  //   const draw = (context) => {
  //     const playerImage = new Image();
  //     playerImage.src = player;

  //     // context.drawImage(playerImage, 500, 500);
  //     playerImage.onload = () => {
  //       context.drawImage(playerImage, 0, 0, 500, 500);
  //     };
  //   };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getContext("2d");

    draw(context);
  }, []);

  return <canvas className="canvas-container" ref={canvasRef} />;
};

export default Canvas;
