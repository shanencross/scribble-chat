import React, { useRef, useState, useEffect } from 'react';

function CanvasTest() {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState();

  useEffect(() =>{
    console.log("Hello world");
    setCtx(canvasRef.current.getContext('2d'));
  }, []);

  const onButtonClick = () => {
    console.log('click');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
  }

  const handleDrawStart = (e) => {
    console.log(`${e.clientX}, ${e.clientY}`);
    const canvas = canvasRef.current;
    const x = e.clientX - canvas.offsetLeft;
    const y = e.clientY - canvas.offsetTop;
    console.log(canvasRef);
    console.log(`canvas coords: ${x}, ${y}`)
    ctx.fillRect(x, y, 1, 1);
  }

  const handleDrawMove = (e) => {
    console.log("Drawing moving");
  }

  const handleDrawEnd = (e) => {
    console.log("Drawing end");
  }

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <canvas 
        ref={canvasRef}
        onMouseDown={handleDrawStart}
        onMouseMove={handleDrawMove}
        onMouseUp={handleDrawEnd}>Canvas</canvas>
      <button onClick={onButtonClick}>Paint Green</button>
    </React.Fragment>
  );
}

export default CanvasTest;