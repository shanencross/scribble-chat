import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ScribbleCanvas from './ScribbleCanvas';

function ChatInputBox({width=500, height=200, onSubmit}) {
  const canvasRef = useRef();
  const usernameInputRef = useRef();

  const clearCanvas = (cvs) => {
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, cvs.width, cvs.height);
  }

  const handleCanvasUpdate = (canvas) => {
    canvasRef.current = canvas;
  }

  const onSendClick = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    onSubmit(usernameInputRef.current.value, dataURL);
    clearCanvas(canvas);
  }

  return (
    <React.Fragment>
      <div>
        <h3>Draw scribble message:</h3>
        <ScribbleCanvas width={width} height={height} onCanvasUpdate={handleCanvasUpdate}/>
        <input ref={usernameInputRef} placeholder='Enter username'/>
        <button onClick={onSendClick}>Send scribble</button>
      </div>
    </React.Fragment>
  );
}

ChatInputBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onSubmit: PropTypes.func
};

export default ChatInputBox;